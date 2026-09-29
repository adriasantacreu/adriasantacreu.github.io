---
title: "Muestrario de pruebas oficiales"
summary: "Buscador web de preguntas oficiales de PAU (Matemáticas II y CCSS) y de Competencias Básicas de Cataluña: 1.005 ejercicios PAU y 77 actividades CCBB con 627 ítems, cada uno con la captura original, búsqueda instantánea en el navegador y fichas A4 imprimibles. 100% estático."
date: "Sep 29 2026"
draft: false
lang: es
tags:
  - TypeScript
  - Vite
  - MiniSearch
  - SQLite
  - PyMuPDF
  - OpenCV
  - Docencia
demoUrl: https://adriasantacreu.github.io/banc-proves-oficials/
repoUrl: https://github.com/adriasantacreu/banc-proves-oficials
---

### Motivación

Cuando preparas una ficha de ejercicios, la pregunta que vale la pena trabajar casi siempre ya existe: está en una PAU de un año concreto o en una prueba de Competencias Básicas. El problema no es la falta de material, sino **la fricción para encontrarlo y extraerlo**: PDF de decenas de páginas, capturas hechas a mano y soluciones en archivos aparte.

Este proyecto convierte las pruebas oficiales en una herramienta de consulta: escribes «matriu» y tienes la captura limpia de cada pregunta, la referencia exacta (año, convocatoria, serie, número y puntos) y la solución oficial a un clic.

### Qué contiene

* **PAU**: 1.005 ejercicios, 528 de Matemáticas II (1997–2025) y 477 de Matemáticas aplicadas a las CCSS (2000–2025), con el enunciado y la solución oficial capturados por separado.
* **Competencias Básicas**: 77 actividades de las pruebas de 4.º y 2.º de ESO (2021–2026), con 627 ítems. La unidad es la **actividad**: el contexto (texto, figuras) se ve siempre, y cada ítem tiene su propia captura y la clave oficial.
* **2.526 imágenes** WebP sin pérdida, ~100 MB en total.

### Cómo se ha hecho

**Dos bases de datos, una capa fina por encima.** Cada colección tiene su base (SQLite con FTS5) y un `check` que se detiene si algo no cuadra: el recuento de ejercicios debe ser igual al del índice oficial, cada ejercicio debe tener captura de enunciado, ningún enunciado puede llevar texto de solución, ningún contexto puede contener un ítem y los márgenes de las capturas son limpios. Las excepciones aceptadas están escritas en un archivo, no escondidas en el código.

**El muestrario solo lee las bases.** Un script de exportación valida los recuentos, convierte a WebP y genera un índice ligero (~580 KB) y un corpus de texto aparte (~1,9 MB) que se carga después del primer pintado. Esto mantiene rápido el primer pintado.

**Front-end estático** (TypeScript + Vite, sin frameworks):

* Búsqueda con **MiniSearch** en el navegador: prefijos, tolerancia a errores y sin tildes («calcul» encuentra «càlcul»).
* Filtros por colección, bloque, convocatoria y rango de años, con recuento en vivo. El estado vive en el hash de la URL, de modo que una búsqueda se puede enlazar.
* **Copia al portapapeles**: la captura se convierte a PNG en el navegador y se pega en Word, Docs o LaTeX.
* **Carrito y ficha A4** imprimible, con o sin soluciones y sin ningún enunciado partido entre páginas.

### Qué he aprendido (y qué falló)

La primera versión salió con 790 ejercicios y parecía buena, pero no lo era: el muestrario recortaba las capturas por su cuenta, los subítems reutilizaban la captura del padre y había textos que solo eran el resumen de la actividad. Ninguna tarea se había comprobado mirando el resultado. Lo rehíce desde las fuentes: cada base tiene sus comprobaciones y, antes de dar una fase por acabada, se genera una **hoja de miniaturas** para que una persona la repase. Ha sido la parte que más ha valido la pena.

### Estado y límites

* Lighthouse: escritorio 98 / 100 / 100 / 100 y móvil 87 / 100 / 100 / 100 (rendimiento, accesibilidad, buenas prácticas y SEO), sin desplazamientos de diseño.
* Los bloques y temas son una clasificación propuesta que aún tengo que revisar a mano.
* Dos contextos de la prueba CTE de 2.º de ESO (2024) llevan un ítem dentro: es una excepción documentada.
* Las capturas proceden de documentos oficiales de la Generalitat de Catalunya y se publican con finalidad docente.
