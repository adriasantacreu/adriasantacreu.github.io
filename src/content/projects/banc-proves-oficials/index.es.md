---
title: "Banco de pruebas oficiales"
summary: "Buscador web de preguntas oficiales de PAU y Competencias Básicas de Cataluña: 790 ejercicios con captura a 200 DPI, búsqueda instantánea en el navegador, soluciones oficiales, copia al portapapeles con un clic y fichas A4 imprimibles. 100% estático en GitHub Pages."
date: "Sep 28 2026"
draft: false
tags:
  - TypeScript
  - Vite
  - Tailwind CSS
  - MiniSearch
  - PyMuPDF
  - OpenCV
  - Docencia
lang: es
demoUrl: https://adriasantacreu.github.io/banc-proves-oficials/
repoUrl: https://github.com/adriasantacreu/banc-proves-oficials
---

### Motivación

Cuando preparas una ficha de ejercicios, la pregunta que merece la pena trabajar casi siempre ya existe: está en una PAU de algún año o en una prueba de Competencias Básicas. El problema no es la falta de material, sino **la fricción para encontrarlo y extraerlo**: PDFs de decenas de páginas, capturas de pantalla manuales, soluciones en archivos separados y márgenes blancos por todas partes.

Este proyecto convierte años de pruebas oficiales en una herramienta de consulta instantánea: escribes "matriz invertible" y tienes la captura limpia de la pregunta, la referencia exacta (año, convocatoria, serie, número y puntos), la solución oficial y los criterios de corrección a un clic.

### Solución técnica

**Pipeline de ingeniería documental** (Python + PyMuPDF + OpenCV):

* **PAU**: 163 ejercicios de Matemáticas II (1997–2025) procedentes del compendio *Pautec*, con enunciado, solución y baremo indexados en SQLite con búsqueda de texto completo (FTS5).
* **Competencias Básicas**: 627 ítems de las pruebas oficiales de 4º y 2º de ESO (2021–2026), recortados automáticamente mediante detección geométrica de los PDFs oficiales. Cuando el mapa de caracteres de la fuente viene roto (caso de las pruebas de 2025), un **fallback con Tesseract OCR** localiza los números de ítem sobre el renderizado de la página.
* Cada recorte pasa por `autocrop_tight` (OpenCV): fondo blanco limpio, sin márgenes sobrantes, **nitidez real de 200 DPI**, publicado en **WebP sin pérdida** (~15 KB por captura; 46 MB todo el banco).

**Front-end 100% estático** (TypeScript + Vite + Tailwind):

* El índice pre-generado (`proves.json`, 1 MB) se indexa en memoria con **MiniSearch** al cargar la página: búsqueda instantánea (< 10 ms) con prefijos, tolerancia a errores y **normalización catalana de acentos** ("calcul" encuentra "càlcul").
* Cero backend: todo corre en el navegador y se aloja en GitHub Pages con despliegue automático (GitHub Actions).

### Características principales

* **Búsqueda y filtros en tiempo real** por etapa, materia, convocatoria y año, con recuento de resultados en vivo y sugerencias cuando no hay coincidencias.
* **Soluciones y criterios oficiales** desplegables en cada tarjeta, indicando con claridad cuando una prueba antigua no tiene solución digitalizada.
* **Copia al portapapeles con un clic**: la captura se convierte a PNG en el navegador (`Clipboard API`) y se pega directamente en Word, Google Docs, Canva o LaTeX. Si el navegador bloquea el permiso, ofrece la descarga.
* **Carrito de preguntas y ficha A4**: seleccionas ejercicios de cualquier año y convocatoria, los reordenas, y el modo de impresión (`@media print`) maqueta una ficha limpia con cabecera editable (título, curso, fecha y nombre) y **ningún enunciado partido entre páginas** (`break-inside: avoid`).

### Impacto

* **790 preguntas** oficiales consultables en menos de un segundo, sin registrarse ni descargar ningún PDF.
* Lo que antes eran 10–15 minutos de capturas manuales por pregunta se reduce a **un clic** (copia directa) o **dos clics** (ficha completa imprimible).
* Coste de infraestructura: **cero**. Todo el servicio es estático y gratuito, y el código es público para la comunidad docente.
