/*
 * cresciente-extraer.js
 * ---------------------
 * Extrae el contenido de un módulo de cresciente.net a Markdown.
 *
 * USO
 *   1. Ajustá las constantes CURSO y MODULO de abajo.
 *   2. Abrí cresciente.net en Chrome, con tu sesión iniciada.
 *   3. Entrá a cualquier página del curso (hace falta estar en el dominio).
 *   4. DevTools (Cmd+Opt+I) → pestaña Console → pegá TODO este archivo → Enter.
 *   5. Se descarga un .md por lección a ~/Downloads.
 *   6. Movelos a "5. Referencias/3. Cursos/Cresciente/".
 *
 * NOTAS TÉCNICAS (descubiertas a la mala, no las cambies sin motivo)
 *   · El REST API de WordPress está bloqueado (401). Hay que scrapear el HTML.
 *   · El contenido vive en el selector .ld-tabs-content; los comentarios en .comment
 *   · HAY QUE IR SECUENCIAL con pausa. En paralelo el servidor devuelve páginas
 *     vacías en silencio y parece que el tema no tiene contenido cuando sí lo tiene.
 *   · La mayoría de los temas son solo video: no hay texto ni transcripción.
 *   · C0 y C1 llevan la estructura escrita a mano; C2 se descubre sola
 *     leyendo el árbol del curso. Para sumar un curso nuevo alcanza con
 *     una entrada en CURSOS con "modulos: null".
 */
(async () => {
  "use strict";

  // ▼▼▼ LO ÚNICO QUE SE CAMBIA ▼▼▼
  const CURSO = "C2"; // "C0", "C1" o "C2"
  const MODULO = 1; // C0: 1-3 · C1: 1-5 · C2: 1-5
  // ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

  const PAUSA_MS = 250;

  // ---------------------------------------------------------------- estructura
  const CURSOS = {
    C0: {
      slug: "ciclo-0-primeros-pasos-en-la-composicion-musical-v3-0",
      prefijo: "C0 - ",
      modulos: {
      1: {
        "Cap 1. Anatomía de la melodía": {
          slug: "capitulo-1-anatomia-de-la-melodia",
          temas: [
            "que-define-a-una-buena-melodia",
            "curva-melodica",
            "melodia-y-arpegio",
            "desdoblamiento-lineal-y-melodia-compuesta",
            "motivos",
            "componiendo-pequenas-melodias",
            "los-climax",
            "creando-una-melodia-con-sentido-de-progresion",
            "clase-1-melodias-con-personalidad",
            "actividad-1-creemos-una-buena-melodia",
          ],
        },
        "Cap 2. Cómo armonizar melodías": {
          slug: "capitulo-2-como-armonizar-melodias",
          temas: [
            "armonizar-melodias",
            "gravedad-melodica",
            "analizando-melodias-y-su-gravedad-melodica",
            "las-notas-de-los-acordes",
            "como-hacer-un-barrido-armonico",
            "como-tocar-estos-acordes",
            "funciones-tonales-y-armonizacion",
            "armonias-principales-y-armonias-de-paso",
            "otras-posibilidades-melodicas",
            "llevando-todo-a-la-practica",
            "clase-2-fluidez-armonica",
            "actividad-2-armonizando-tu-melodia",
          ],
        },
        "Cap 3. Groove y acompañamiento": {
          slug: "capitulo-3-groove-y-acompanamiento",
          temas: [
            "video-acompanamiento-y-groove",
            "posibilidades-de-los-compases-simples",
            "como-funciona-la-bateria",
            "creando-desde-el-ritmo-compas-simple-4-4",
            "posibilidades-de-los-compases-compuestos",
            "creando-desde-el-ritmo-compas-compuesto-6-8",
            "planos-texturas-y-mecanismos-de-atencion",
            "construccion-de-un-acompanamiento",
            "video-patrones-de-acompanamiento-para-una-misma-melodia",
            "clase-3-un-buen-fundamento",
            "actividad-3-construyendo-tu-propio-groove",
          ],
        },
        // Ojo: el primer proyecto es solo "proyecto-1", sin sufijo "1-2"
        // como su par. Inconsistencia de ellos, no la "arregles".
        "Cierre de módulo 1": {
          slug: "cierre-de-modulo-1",
          temas: [
            "clase-integradora-modulo-1",
            "proyecto-1",
            "proyecto-1-componiendo-desde-la-melodia-2-2",
          ],
        },
      },

      2: {
        "Cap 4. Modo menor compuesto": {
          slug: "capitulo-4-modo-menor-compuesto",
          temas: [
            "la-complejidad-del-modo-menor",
            "el-modo-menor-2",
            "sistema-menor-compuesto-en-la-practica-comun",
            "mixtura-entre-modos-menores",
            "componiendo-en-modo-menor-compuesto",
            "el-modo-dorico",
            "componiendo-desde-el-modo-dorico",
            "el-poder-del-acorde-disminuido",
            "jugando-con-acordes-disminuidos-7",
            "resumen-de-nuestros-nuevos-acordes",
            "jugando-con-mixtura-o-intercambio-modal",
            "creando-desde-el-modo-menor-compuesto",
            "clase-4-cambios-de-color-en-modo-menor",
            "actividad-4-aprovechando-la-riqueza-armonica-del-modo-menor",
          ],
        },
        "Cap 5. Polifonía y conducción de voces": {
          slug: "capitulo-5-polifonia-y-conduccion-de-voces",
          temas: [
            "del-contrapunto-a-la-armonia-2",
            "repasando-consonancia-y-disonancia-2",
            "como-llegamos-a-tocar-acordes",
            "metodo-del-contrapunto-por-especies",
            "demostracion-del-metodo-por-especies",
            "contrapunto-en-primera-especie-nota-contra-nota",
            "extrapolando-un-contrapunto-en-primera-especie",
            "reglas-basicas-de-conduccion-a-4-partes",
            "realizando-un-cifrado-a-4-voces",
            "creando-un-arreglo-para-una-cancion-y-extrapolando",
            "clase-5-aplicaciones-de-la-conduccion-de-voces",
            "actividad-5-un-arreglo-de-cuerdas-para-una-seccion-de-una-cancion",
          ],
        },
        // El slug dice solo "pentafonia" pero el título es "Pentafonía y Blues".
        "Cap 6. Pentafonía y Blues": {
          slug: "capitulo-6-pentafonia",
          temas: [
            "el-poder-de-la-pentatonica",
            "las-escalas-pentafonas",
            "armonizando-melodias-pentafonas",
            "armonias-mas-exoticas-desde-la-pentafonia",
            "notas-de-blues",
            "forma-de-blues-de-12-compases",
            "misterios-del-blues",
            "escala-bebop",
            "consejos-para-abordar-la-improvisacion",
            "clase-6-pentafonia-cromatismos-y-riffs",
            "actividad-6-un-solo",
          ],
        },
        // Acá los proyectos van ANTES de la clase integradora.
        "Cierre de módulo 2": {
          slug: "cierre-de-modulo-2",
          temas: [
            "proyecto-2-musica-en-modo-menor-1-2",
            "proyecto-2-musica-en-modo-menor-2-2",
            "clase-integradora-modulo-2",
          ],
        },
      },

      3: {
        "Cap 7. El Texto": {
          slug: "capitulo-7-el-texto",
          temas: [
            "la-importancia-de-la-letra",
            "metrica-y-rima-como-crear-fluidez-y-coherencia-en-la-letra",
            "como-escribir-letra-en-partitura",
            "integracion-de-letra-melodia-y-acentos",
            "figuras-poeticas",
            "musicalizando-un-poema-breve",
            "narrativas-comunes-en-la-cancion",
            "puntos-de-partida",
            "la-repeticion",
            "formas-fijas",
            "analisis-de-4-textos",
            "clase-7-la-artesania-de-la-cancion-con-fran-paez-grillo",
            "actividad-7-una-pequena-musica-con-texto",
          ],
        },
        "Cap 8. Engrosamiento melódico": {
          slug: "capitulo-8-engrosamiento-melodico",
          temas: [
            "el-poder-del-engrosamiento",
            "doblaje-por-octavas-terceras-y-sextas",
            "segundas-voces-por-arriba-en-la-produccion",
            "doblaje-en-otros-intervalos",
            "probando-doblajes-a-distintos-intervalos",
            "doblaje-oblicuo",
            "contracantos",
            "cada-cosa-en-su-lugar",
            // Sí, dice "clase-9" estando en el capítulo 8. Error de ellos.
            "clase-9-aprovechando-la-densidad-melodica",
            "actividad-8-aplicando-el-doblaje",
          ],
        },
        "Cap 9. La forma canción": {
          slug: "capitulo-9-la-forma-cancion",
          temas: [
            "la-problematica-formal",
            "funciones-formales",
            "caracteristicas-musicales-de-cada-funcion-formal",
            "forma-interna-de-una-seccion-de-musica",
            "secciones-centrales-estrofa-y-estribillo",
            "secciones-auxiliares-introducciones-transiciones-puentes-y-codas",
            "algunos-tipos-de-forma-cancion",
            "3-analisis",
            "imaginando-una-cancion-el-plan-de-composicion",
            "acumulando-material-para-nuestra-cancion",
            "armando-una-primera-maqueta",
            "el-arreglo-y-la-produccion",
            "clase-9-cada-cosa-en-su-lugar",
            "actividad-9-un-analisis-formal",
          ],
        },
        "Cierre de módulo 3": {
          slug: "cierre-de-modulo-3",
          temas: [
            "clase-integradora-modulo-3",
            "proyecto-3-tu-cancion-1-3",
            "proyecto-3-tu-cancion-2-3",
            "proyecto-3-tu-cancion-3-3",
          ],
        },
      },
      },
    },

    C1: {
      slug: "ciclo-1-fundamentos-del-oficio-v3-0",
      prefijo: "C1 - ",
      modulos: {
      1: {
        "1A. Ornamentando una melodía": {
          slug: "1a-ornamentando-una-melodia",
          temas: [
            "concepto-de-ornamentacion",
            "notas-de-paso-diatonicas-y-cromaticas",
            "creando-melodias-con-notas-de-paso-y-cromatismos",
            "aproximacion-cromatica",
            "bordaduras-floreos-y-enclosure",
            "mas-alla-con-las-disonancias",
            "variando-una-melodia-a-traves-de-la-ornamentacion",
            "clase-1a-variaciones-melodicas",
            "actividad-1a-melodia-y-variacion",
          ],
        },
        "1B. Acordes de séptima": {
          slug: "1b-acordes-de-septima-como-donde-y-cuando",
          temas: [
            "breve-historia-de-las-septimas-en-la-armonia",
            "especies-basicas-de-4-sonidos",
            "como-llevar-estos-acordes-al-instrumento",
            "otras-especies-de-4-notas",
            "disposicion-en-acordes-de-4-notas",
            "armonizando-una-melodia-con-tetradas",
            "re-armonizando-una-armonia-triadica",
            "clase-1b-fluidez-armonica",
            "actividad-1b",
          ],
        },
        "1C. Cómo sacarle el jugo al material": {
          slug: "1c-como-sacarle-el-jugo-al-material",
          temas: [
            "concepto-de-variacion-y-desarrollo",
            "tecnicas-de-variacion-de-las-alturas",
            "transformacion-ritmica-aumentacion-disminucion-y-retrogradacion",
            "creando-una-seccion-de-musica-a-partir-de-otra",
            "otras-transformaciones-condensacion-liquidacion-y-ornamentacion",
            "tipos-de-relacion-entre-materiales",
            "aplicando-estos-conceptos-a-la-improvisacion",
            "creando-3-posibles-continuaciones-para-una-misma-frase-inicial",
            "clase-1c-la-variacion-infinita",
            "actividad-1c-una-idea-y-3-posibles-continuaciones",
          ],
        },
        "Cierre de módulo 1": {
          slug: "cierre-de-modulo-1-2",
          temas: [
            "clase-integradora-modulo-1-2",
            "proyecto-1-creando-sobre-una-pieza-existente-1-2",
            "proyecto-1-creando-sobre-una-pieza-existente-2-2",
          ],
        },
      },

      2: {
        "2A. Notas activas y tendencias melódicas": {
          slug: "2a-notas-activas-y-tendencias-melodicas",
          temas: [
            "tension-y-resolucion-2",
            "notas-activas-en-modo-mayor-2",
            "pilares-melodicos-estables-e-inestables",
            "notas-activas-en-modo-menor",
            "modo-menor-segun-schoenberg-notas-obligadas-y-neutralizacion",
            "resolucion-directa-e-indirecta",
            "estabilidad-relativa",
            "relacion-entre-funciones-tonales-y-notas-activas",
            "impulso-cromatico",
            "clase-2a-notas-objetivo",
            "actividad-2a-frases-melodicas-a-partir-de-2-puntos",
          ],
        },
        "2B. Inversiones y acordes de paso": {
          slug: "2b-inversiones-y-acordes-de-paso",
          temas: [
            "no-todo-es-lo-que-parece-las-inversiones-tampoco",
            "definicion-y-uso-de-las-inversiones",
            "el-bajo-pedal",
            "consideraciones-para-el-uso-de-las-inversiones",
            "limite-de-intervalo-bajo",
            "creando-lineas-de-bajo-con-inversiones",
            "prolongacion-armonica-y-acordes-contrapuntisticos",
            "explorando-la-prolongacion",
            "tonica-en-segunda-inversion-o-seis-cuatro-cadencial",
            "armonias-de-paso-e-inversiones",
            "clase-2b-el-potencial-de-la-prolongacion",
            "actividad-2b-crear-una-musica-a-partir-del-bajo",
          ],
        },
        // Ojo: el título real lleva dos puntos ("Sumando complejidad rítmica:
        // síncopa y polirritmia"). Se acorta acá porque ":" en un nombre de
        // archivo se ve como "/" en Finder y rompe la nota en Obsidian.
        "2C. Síncopa y polirritmia": {
          slug: "2c-sumando-complejidad-ritmica-sincopa-y-polirritmia",
          temas: [
            "mas-alla-de-los-ritmos-basicos",
            "la-sincopa-y-el-contratiempo",
            "aplicaciones-de-la-sincopa",
            "claves-ritmicas",
            "patrones-basicos-de-ritmos-sincopados",
            "componiendo-una-base-ritmica-desde-la-sincopa",
            "superposicion-metrica",
            "superposicion-metrica-en-el-folclore-latinoamericano",
            "superposicion-metrica-en-el-rock",
            "subdivisiones-prestadas-tresillos-dosillos-y-cuatrillos",
            "componiendo-desde-el-entramado-ritmico",
            "clase-2c-percepcion-ritmica",
            "actividad-2c-creando-musica-sincopada",
          ],
        },
        "Cierre de módulo 2": {
          slug: "cierre-de-modulo-2-2",
          temas: [
            "proyecto-2-comencemos-por-el-ritmo-1-2",
            "proyecto-2-comencemos-por-el-ritmo-2-2",
            "clase-integradora-modulo-2-2",
          ],
        },
      },

      3: {
        "3A. Fraseo melódico": {
          slug: "3a-fraseo-melodico",
          temas: [
            "la-importancia-del-fraseo",
            "tipos-de-inicio-de-frase",
            "tipos-de-finales-de-frase",
            "detectando-frases-y-sus-caracteristicas",
            "estructuras-balanceadas-y-desbalanceadas",
            "explorando-los-distintos-encadenamientos-de-frases",
            "correspondencia-ritmica",
            "relacion-entre-el-texto-y-correspondencia-ritmica",
            "clase-3a-fraseo-y-transformacion-ritmica",
            "actividad-3a",
          ],
        },
        "3B. Dirección armónica y dominantes secundarios": {
          slug: "3b-direccion-armonica-y-dominantes-secundarios",
          temas: [
            "factores-en-la-direccion-armonica",
            "acento-armonico-y-sincopa-armonica",
            "tipos-de-enlace-entre-grados",
            "2-esquemas-armonicos-tipicos",
            "armonia-circular-el-loop-armonico",
            "cadencias-tipos-y-consideraciones-estilisticas",
            "resoluciones-deceptivas-2",
            "cadencias-modales-y-otras-logicas-armonicas",
            "dominantes-secundarios",
            "conectando-todo",
            "clase-3b-continuidad-y-flujo-armonico",
            "actividad-3b-componiendo-desde-la-armonia",
          ],
        },
        // Título real: "Forma media: cómo estructurar una sección de música".
        // Se acorta por los dos puntos (ver nota en 2C).
        "3C. Forma media": {
          slug: "3c-forma-media-como-estructurar-una-seccion-de-musica",
          temas: [
            "que-consideramos-una-seccion-y-como-se-conforma",
            "el-periodo",
            "la-oracion-y-el-fortspinnung",
            "formas-del-blues",
            "esquemas-de-31",
            "formas-aab-aaba-y-abac",
            "periodo-y-oracion-compuestos",
            "creando-musica-a-partir-de-estas-estructuras-parte-1",
            "creando-musica-a-partir-de-estas-estructuras-parte-2",
            "clase-3c-balance-entre-unidad-y-variedad",
            "actividad-3c-una-idea-varias-musicas",
          ],
        },
        "Cierre de módulo 3": {
          slug: "cierre-de-modulo-3-2",
          temas: [
            "clase-de-cierre-modulo-3",
            "proyecto-3-1-2-2",
            "proyecto-3-2-2-2",
          ],
        },
      },

      4: {
        "4A. Escalas y relación escala acorde": {
          slug: "4a-escalas-y-relacion-escala-acorde",
          temas: [
            "relacion-escala-acorde-ventajas-y-desventajas",
            "escalas-modales-los-7-modos-basicos",
            "conociendo-estos-colores",
            "analizando-los-modos-de-una-progresion-y-variando-sus-colores",
            "escalas-de-dominante",
            "pentafonas-y-su-relacion-escala-acorde",
            "improvisacion-estudio-e-internalizacion-de-estos-conceptos",
            "sonoridades-mas-exoticas",
            "creando-musica-a-partir-del-pensamiento-de-escala",
            "clase-4a-modos-y-transformaciones",
            "actividad-4a-melodia-agil",
          ],
        },
        "4B. Armonía modal y mixtura": {
          slug: "4b-armonia-modal-y-mixtura",
          temas: [
            "que-es-la-armonia-modal",
            "modos-y-acordes-cadenciales",
            "armonia-en-los-modos-menores",
            "creando-armonias-en-modos-menores",
            "el-caso-locrio",
            "armonia-en-los-modos-mayores",
            "creando-armonias-en-modos-mayores",
            "mixtura-o-intercambio-modal",
            "ley-de-cercania",
            "jugando-con-la-mixtura-modal",
            "mixtura-parcial",
            "jugando-con-algunos-modos-alterados",
            "clase-4b-escuchando-los-modos",
            // Sí, dice "4a" y está en la lección 4B. Es un error de ellos en el
            // CMS, pero el slug real es este: no lo "corrijas" o da 404.
            "actividad-4a-crear-una-musica-usando-los-colores-modales",
          ],
        },
        "4C. Texturas de acompañamiento": {
          slug: "4c-texturas-de-acompanamiento",
          temas: [
            "mas-alla-de-las-texturas-basicas",
            "definiendo-conceptos-orquestacion-e-instrumentacion",
            "instrumentacion-orquestacion-y-familias",
            "principios-basicos-de-instrumentacion-y-orquestacion",
            "posibilidades-de-los-instrumentos-de-la-seccion-ritmica",
            "posibilidades-de-los-instrumentos-melodicos",
            "escritura-para-la-seccion-ritmica",
            "ideas-para-lineas-de-bajo",
            "el-rasgueo-o-rasguido",
            "arpegios-y-sus-posibilidades",
            "mecanismos-de-atencion",
            "obligados-que-son-y-su-importancia-en-el-arreglo",
            "del-colchon-al-contrapunto",
            "texturas-y-acompanamientos-en-la-practica-comun",
            "grooves-representativos-raices-del-groove",
            "grooves-representativos-sabrosos",
            "grooves-representativos-pop-y-electronica",
            "grooves-representativos-folklore-y-fusion",
            "clase-4c-disenando-un-acompanamiento",
            "actividad-4c-trabajando-la-textura",
          ],
        },
        // Ojo: este slug NO lleva el sufijo "-2" que sí tienen los cierres
        // de los módulos 1, 2 y 3.
        "Cierre de módulo 4": {
          slug: "cierre-de-modulo-4",
          temas: [
            "clase-integradora-modulo-4",
            "proyecto-4-modos-y-texturas-1-2",
            "proyecto-4-modos-y-texturas-2-2",
          ],
        },
      },

      5: {
        "5A. Suspensiones, apoyaturas y anticipaciones": {
          slug: "5a-suspensiones-apoyaturas-y-anticipaciones",
          temas: [
            "desfases-entre-melodia-y-armonia",
            "anticipaciones",
            "retardos",
            "jugando-con-los-retardos-y-sus-ornamentaciones",
            "apoyaturas",
            "creando-melodias-con-apoyaturas-cromaticas",
            "analisis-de-algunos-fragmentos-musicales",
            "acordes-suspendidos-sus4-sus2-7sus",
            "jugando-desde-los-acordes-suspendidos",
            "aplicando-estas-tecnicas-a-una-textura-armonica-a-4-voces",
            "clase-5a-usando-disonancias-en-un-arreglo",
            "actividad-5a",
          ],
        },
        "5B. Modulación": {
          slug: "5b-modulacion",
          temas: [
            "modulacion-que-es-y-para-que-nos-sirve",
            "modulacion-entre-relativas-2",
            "modulacion-en-una-melodia-sola",
            "tonalidades-cercanas-y-acordes-pivote",
            "modulacion-abrupta",
            "tonalidades-mas-lejanas-segundo-sector",
            "modulacion-a-traves-de-la-reinterpretacion-de-una-mixtura-modal",
            "modulacion-entre-paralelas-y-sus-relativas",
            "como-llevar-esto-a-mi-musica",
            "modulaciones-modales-mismas-notas-otro-centro",
            "modulacion-a-traves-del-acorde-disminuido",
            "creando-un-puente-modulante",
            "clase-5b-practiquemos-la-modulacion",
            "actividad-5b-modulacion-a-partir-de-una-musica-anterior",
          ],
        },
        "5C. Macroforma y formas Clásicas": {
          slug: "5c-macroforma-y-formas-clasicas",
          temas: [
            "pensando-en-grande",
            "funciones-formales-como-trabajan-a-nivel-macro",
            "analisis-de-algunas-formas-interesantes",
            "minueto-forma-ternaria-compuesta",
            "como-crear-buenas-secciones-de-transicion",
            "construyendo-una-transicion",
            "rondo-recurrencia-como-principio-unificador",
            "tema-y-variaciones",
            "forma-sonata-el-drama-lineal-del-conflicto-tonal",
            "analisis-de-sonatas-mozart",
            "analisis-de-sonatas-beethoven",
            "el-desarrollo-como-laboratorio",
            "un-metodo-compositivo",
            "clase-5c-jazz-tema-y-variacion-y-sonata",
            "actividad-5c-un-analisis",
          ],
        },
        // Como el módulo 4, este slug tampoco lleva sufijo "-2".
        // Y es el único cierre con 4 temas: el proyecto final va en 3 partes.
        "Cierre de módulo 5": {
          slug: "cierre-de-modulo-5",
          temas: [
            "clase-integradora-modulo-5",
            "proyecto-final-c1-1-3",
            "proyecto-final-c1-2-3",
            "proyecto-final-c1-3-3",
          ],
        },
      },
  
      },
    },

    // C2 no lleva estructura escrita a mano: son 227 temas en 21 lecciones.
    // Con "modulos: null" el script la descubre solo, leyendo el árbol de
    // navegación del curso. Ojo: su slug NO tiene el sufijo "-v3-0".
    C2: {
      slug: "ciclo-2-ampliando-el-lenguaje",
      prefijo: "C2 - ",
      modulos: null,
    },
  };

  const CFG = CURSOS[CURSO];
  const BASE = CFG
    ? "https://cresciente.net/cursos/" + CFG.slug + "/lecciones/"
    : null;

  // Los títulos del sitio traen ":" ("1A: Secuencias"), que en un nombre de
  // archivo se ve como "/" en Finder y rompe la nota en Obsidian.
  function nombreArchivo(t) {
    return t
      .replace(/\s+/g, " ")
      .trim()
      .replace(/^(\d+[A-Za-z]?)\s*:\s*/, "$1. ") // "1A: X" → "1A. X"
      .replace(/\s*:\s*/g, " - ") // ":" restantes
      .replace(/[\/\\]/g, "-")
      .trim();
  }

  // Reconstruye módulo → lecciones → temas desde el árbol del curso.
  // Se hace por fetch para que puedas correrlo desde cualquier página
  // del dominio, no solo desde la portada del curso.
  async function descubrirEstructura(slugCurso) {
    const r = await fetch("https://cresciente.net/cursos/" + slugCurso + "/", {
      credentials: "include",
    });
    if (!r.ok) throw new Error("No se pudo leer el curso: HTTP " + r.status);
    const doc = new DOMParser().parseFromString(await r.text(), "text/html");

    const nodos = [
      ...doc.querySelectorAll(
        '.ld-item-list-section-heading, a[href*="/lecciones/"]',
      ),
    ];
    let mod = null;
    const out = {};
    const vistos = new Set();
    const dondeVive = {}; // slug de lección → módulo

    for (const n of nodos) {
      if (
        n.classList &&
        n.classList.contains("ld-item-list-section-heading")
      ) {
        const t = (n.textContent || "").trim().split("\n")[0];
        const m = t.match(/(\d+)/);
        mod = m ? +m[1] : t;
        if (!out[mod]) out[mod] = {};
        continue;
      }
      const href = n.getAttribute && n.getAttribute("href");
      if (!href) continue;
      const h = href.split("#")[0].replace(/\/$/, "");
      const m = h.match(/\/lecciones\/([^/]+)(?:\/temas\/([^/]+))?$/);
      if (!m) continue;
      if (vistos.has(h)) continue;
      vistos.add(h);

      if (!m[2]) {
        // Es una lección. Las de antes del primer encabezado (la de
        // bienvenida) quedan fuera a propósito: no tienen temas.
        if (mod === null) continue;
        const t = (n.textContent || "").trim().split("\n")[0];
        out[mod][nombreArchivo(t)] = { slug: m[1], temas: [] };
        dondeVive[m[1]] = nombreArchivo(t);
      } else {
        // Es un tema: va a la lección que ya registramos.
        for (const k of Object.keys(out)) {
          const nom = dondeVive[m[1]];
          if (nom && out[k][nom]) {
            out[k][nom].temas.push(m[2]);
            break;
          }
        }
      }
    }
    return out;
  }

  // ------------------------------------------------------------ DOM → Markdown
  function inline(node) {
    let out = "";
    for (const n of node.childNodes) {
      if (n.nodeType === 3) {
        out += n.textContent.replace(/\s+/g, " ");
        continue;
      }
      if (n.nodeType !== 1) continue;
      const t = n.tagName;
      if (t === "BR") out += "\n";
      else if (t === "STRONG" || t === "B")
        out += "**" + inline(n).trim() + "**";
      else if (t === "EM" || t === "I") out += "*" + inline(n).trim() + "*";
      else if (t === "CODE") out += "`" + n.textContent.trim() + "`";
      else if (t === "IMG")
        out += "\n\n![](" + abs(n.getAttribute("src")) + ")\n\n";
      else if (t === "A") {
        const href = abs(n.getAttribute("href"));
        const txt = inline(n).trim();
        out += href ? "[" + (txt || href) + "](" + href + ")" : txt;
      } else out += inline(n);
    }
    return out;
  }

  function abs(u) {
    if (!u) return "";
    try {
      return new URL(u, location.origin).href.split("?")[0];
    } catch {
      return u;
    }
  }

  function tabla(el) {
    const filas = [...el.querySelectorAll("tr")];
    if (!filas.length) return "";
    const celdas = (f) =>
      [...f.querySelectorAll("th,td")].map((c) =>
        inline(c).trim().replace(/\|/g, "\\|"),
      );
    const cab = celdas(filas[0]);
    let md =
      "\n| " +
      cab.join(" | ") +
      " |\n|" +
      cab.map(() => "---").join("|") +
      "|\n";
    for (const f of filas.slice(1)) md += "| " + celdas(f).join(" | ") + " |\n";
    return md + "\n";
  }

  function lista(el, orden) {
    let md = "\n";
    [...el.children].forEach((li, i) => {
      if (li.tagName !== "LI") return;
      md += (orden ? i + 1 + ". " : "- ") + inline(li).trim() + "\n";
    });
    return md + "\n";
  }

  function aMarkdown(root) {
    let md = "";
    for (const n of root.children) {
      const t = n.tagName;
      if (/^H[1-6]$/.test(t)) {
        const nivel = Math.min(parseInt(t[1], 10) + 1, 6);
        md += "\n" + "#".repeat(nivel) + " " + inline(n).trim() + "\n\n";
      } else if (t === "P") {
        const txt = inline(n).trim();
        if (txt) md += txt + "\n\n";
      } else if (t === "UL") md += lista(n, false);
      else if (t === "OL") md += lista(n, true);
      else if (t === "TABLE") md += tabla(n);
      else if (t === "IMG") md += "![](" + abs(n.getAttribute("src")) + ")\n\n";
      else if (t === "BLOCKQUOTE")
        md += "> " + inline(n).trim().replace(/\n/g, "\n> ") + "\n\n";
      else if (t === "IFRAME") {
        const src = abs(n.getAttribute("src"));
        if (src) md += "🎥 [Video](" + src + ")\n\n";
      } else if (n.children.length) md += aMarkdown(n);
      else {
        const txt = inline(n).trim();
        if (txt) md += txt + "\n\n";
      }
    }
    return md;
  }

  // ------------------------------------------------------------------ scraping
  async function traerTema(slugLeccion, slugTema) {
    const url = BASE + slugLeccion + "/temas/" + slugTema + "/";
    const r = await fetch(url, { credentials: "include" });
    if (!r.ok)
      return {
        url,
        titulo: slugTema,
        md: "_(no se pudo cargar: HTTP " + r.status + ")_\n",
        n: 0,
      };

    const doc = new DOMParser().parseFromString(await r.text(), "text/html");
    const cont = doc.querySelector(".ld-tabs-content");
    const titulo = (doc.title || slugTema).split(" – ")[0].trim();

    let md = aMarkdown(cont || doc.createElement("div"))
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    if (!md) md = "_(Tema sin texto: solo video.)_";

    // Consultas y respuestas
    const coms = [...doc.querySelectorAll(".comment")]
      .map((c) =>
        c.textContent
          .replace(/\s+/g, " ")
          .replace(/\s*Respuesta\s*$/, "")
          .trim(),
      )
      .filter(Boolean);
    const vistos = new Set();
    const unicos = coms.filter((c) => {
      const k = c.slice(0, 80);
      if (vistos.has(k)) return false;
      vistos.add(k);
      return true;
    });

    if (unicos.length) {
      md += "\n\n### Consultas\n\n" + unicos.map((c) => "- " + c).join("\n");
    }

    return { url, titulo, md, n: unicos.length };
  }

  function descargar(nombre, texto) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([texto], { type: "text/markdown;charset=utf-8" }),
    );
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  // --------------------------------------------------------------------- main
  (async () => {
    if (!CFG) {
      console.error(
        'Curso "' +
          CURSO +
          '" desconocido. Disponibles: ' +
          Object.keys(CURSOS).join(", ") +
          ".",
      );
      return;
    }

    // Cursos con mapa escrito a mano lo usan tal cual; el resto se descubre.
    let modulos = CFG.modulos;
    if (!modulos) {
      console.log("Leyendo la estructura de " + CURSO + "…");
      try {
        modulos = await descubrirEstructura(CFG.slug);
      } catch (e) {
        console.error("Falló el descubrimiento: " + (e.message || e));
        return;
      }
      const n = Object.values(modulos).reduce(
        (a, l) => a + Object.keys(l).length,
        0,
      );
      console.log(
        "  " +
          Object.keys(modulos).length +
          " módulos, " +
          n +
          " lecciones encontradas.",
      );
    }

    const lecciones = modulos[MODULO];
    if (!lecciones) {
      console.error(
        "El curso " +
          CURSO +
          " no tiene módulo " +
          MODULO +
          ". Disponibles: " +
          Object.keys(modulos).join(", ") +
          ".",
      );
      return;
    }

    const hoy = new Date().toISOString().slice(0, 10);
    const totalTemas = Object.values(lecciones).reduce(
      (a, l) => a + l.temas.length,
      0,
    );
    console.log(
      "%cExtrayendo Módulo " +
        MODULO +
        " — " +
        Object.keys(lecciones).length +
        " lecciones, " +
        totalTemas +
        " temas",
      "font-weight:bold",
    );

    for (const [nombre, { slug, temas }] of Object.entries(lecciones)) {
      let doc = [
        "---",
        "tipo: referencia",
        "curso: cresciente",
        // El ciclo va aparte del módulo: C0 y C1 tienen ambos un "módulo 1",
        // y sin esto las notas de los dos cursos quedan indistinguibles.
        "ciclo: " + CURSO,
        "modulo: " + MODULO,
        "fuente: " + BASE + slug + "/",
        "capturado: " + hoy,
        "tags:",
        "  - curso-musica/referencia",
        "  - cresciente/" + CURSO.toLowerCase() + "/modulo-" + MODULO,
        "---",
        "",
        "# " + nombre,
        "",
      ].join("\n");

      for (let i = 0; i < temas.length; i++) {
        const t = await traerTema(slug, temas[i]);
        console.log(
          "  " +
            (i + 1) +
            "/" +
            temas.length +
            "  " +
            t.titulo +
            "  (" +
            t.md.length +
            " car., " +
            t.n +
            " consultas)",
        );
        doc +=
          "\n---\n\n## " +
          (i + 1) +
          ". " +
          t.titulo +
          "\n\n" +
          "[Abrir en cresciente.net](" +
          t.url +
          ")\n\n" +
          t.md +
          "\n";
        await new Promise((r) => setTimeout(r, PAUSA_MS)); // no quitar: ver cabecera
      }

      // El prefijo del curso evita que "Cierre de módulo 1" de C0 pise al
      // homónimo de C1: existen con el mismo nombre en ambos cursos.
      const archivo = CFG.prefijo + nombre + ".md";
      descargar(archivo, doc);
      console.log("%c✓ " + archivo, "color:green");
    }

    console.log("%cListo. Revisá ~/Downloads", "font-weight:bold;color:green");
  })();
})();
