// Plugin de Vite: le da los patrones al navegador y le avisa cuando cambian.
//
// Los patrones no son módulos que Vite importe: son texto que Strudel evalúa.
// Por eso no pasan por el HMR normal (que recargaría la página y cortaría el
// audio): el plugin los vigila y manda un evento propio, `strudel:cambio`.
import fs from "node:fs";
import path from "node:path";

const ACOMPANAMIENTOS = "1. Acompañamientos";
const VOCABULARIO = "2. Vocabulario";
const PRUEBAS = [".motor/prueba-midi.js"];

// Los .mscz y los archivos de Mac traen los acentos en NFD; se compara en NFC.
const nfc = (s) => s.normalize("NFC");

export default function patrones(carpeta) {
  const aRuta = (abs) =>
    nfc(path.relative(carpeta, abs).split(path.sep).join("/"));

  const listar = (sub) => {
    const dir = path.join(carpeta, sub);
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((n) => n.endsWith(".js"))
      .sort((a, b) => a.localeCompare(b, "es", { numeric: true }))
      .map((n) => ({
        nombre: nfc(n.replace(/\.js$/, "")),
        ruta: nfc(`${sub}/${n}`),
      }));
  };

  const pruebas = () =>
    PRUEBAS.filter((r) => fs.existsSync(path.join(carpeta, r))).map((r) => ({
      nombre: path.basename(r, ".js"),
      ruta: r,
    }));

  // Solo se sirve lo que está en las carpetas de patrones: nada de ../
  const permitida = (ruta) =>
    ruta.endsWith(".js") &&
    !ruta.split("/").includes("..") &&
    (ruta.startsWith(`${nfc(ACOMPANAMIENTOS)}/`) ||
      ruta.startsWith(`${VOCABULARIO}/`) ||
      PRUEBAS.includes(ruta));

  const vigilados = [ACOMPANAMIENTOS, VOCABULARIO, ...PRUEBAS].map((r) =>
    path.join(carpeta, r),
  );

  const esPatron = (abs) =>
    abs.endsWith(".js") && vigilados.some((v) => abs.startsWith(v));

  return {
    name: "strudel-patrones",

    configureServer(server) {
      server.middlewares.use("/api/patrones", (req, res) => {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(
          JSON.stringify({
            acompanamientos: listar(ACOMPANAMIENTOS),
            vocabulario: listar(VOCABULARIO),
            pruebas: pruebas(),
          }),
        );
      });

      server.middlewares.use("/api/codigo", (req, res) => {
        const ruta = nfc(
          new URL(req.url, "http://motor").searchParams.get("ruta") ?? "",
        );
        if (!permitida(ruta)) {
          res.statusCode = 403;
          res.end(`Ruta no permitida: ${ruta}`);
          return;
        }
        fs.readFile(path.join(carpeta, ruta), "utf8", (err, texto) => {
          if (err) {
            res.statusCode = 404;
            res.end(`No existe: ${ruta}`);
            return;
          }
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.end(texto);
        });
      });

      server.watcher.add(vigilados);
      for (const tipo of ["add", "change", "unlink"]) {
        server.watcher.on(tipo, (abs) => {
          if (!esPatron(abs)) return;
          server.ws.send({
            type: "custom",
            event: "strudel:cambio",
            data: { ruta: aRuta(abs), tipo },
          });
        });
      }
    },

    // Que Vite no recargue la página cuando cambia un patrón: eso cortaría el audio.
    hotUpdate({ file }) {
      if (esPatron(path.normalize(file))) return [];
    },
  };
}
