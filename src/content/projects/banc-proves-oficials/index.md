---
title: "Banc de proves oficials"
summary: "Cercador web de preguntes oficials de PAU i Competències Bàsiques de Catalunya: 790 exercicis amb captura a 200 DPI, cerca instantània al navegador, solucions oficials, còpia al porta-retalls i fitxes A4 imprimibles. 100% estàtic a GitHub Pages."
date: "Sep 28 2026"
draft: true
tags:
  - TypeScript
  - Vite
  - Tailwind CSS
  - MiniSearch
  - PyMuPDF
  - OpenCV
  - Docència
demoUrl: https://adriasantacreu.github.io/banc-proves-oficials/
repoUrl: https://github.com/adriasantacreu/banc-proves-oficials
---

### Motivació

Quan prepares una fitxa d'exercicis, la pregunta que val la pena treballar gairebé sempre ja existeix: està en una PAU d'un any concret o en una prova de Competències Bàsiques. El problema no és la manca de material, sinó **la fricció per trobar-lo i extreure'l**: PDFs de desenes de pàgines, captures de pantalla a mà, solucions en fitxers separats i marges blancs per tot arreu.

Aquest projecte converteix anys de proves oficials en una eina de consulta instantània: escrius «matriu invertible» i tens la captura neta de la pregunta, la referència exacta (any, convocatòria, sèrie, número i punts), la solució oficial i la pauta de correcció a un clic.

### Solució tècnica

**Pipeline d'enginyeria documental** (Python + PyMuPDF + OpenCV):

* **PAU**: 163 exercicis de Matemàtiques II (1997–2025) procedents del compendi *Pautec*, amb enunciat, solució i barem indexats a SQLite amb cerca de text complet (FTS5).
* **Competències Bàsiques**: 627 ítems de les proves oficials de 4t i 2n d'ESO (2021–2026), retallats automàticament amb detecció geomètrica dels PDF oficials. Quan el mapa de caràcters de la font ve trencat (cas de les proves de 2025), un **fallback amb Tesseract OCR** localitza els números d'ítem sobre el render de la pàgina.
* Cada retall passa per `autocrop_tight` (OpenCV): fons blanc net, sense marges sobrants, **200 DPI de nitidesa real**, i es publica en **WebP sense pèrdua** (~15 KB per captura; 46 MB tot el banc).

**Front-end 100% estàtic** (TypeScript + Vite + Tailwind):

* L'índex pre-generat (`proves.json`, 1 MB) s'indexa en memòria amb **MiniSearch** al carregar la pàgina: cerca instantània (< 10 ms) amb prefixos, tolerància d'errors i **normalització catalana d'accents** («calcul» troba «càlcul»).
* Zero backend: tot corre al navegador i s'allotja a GitHub Pages amb desplegament automàtic (GitHub Actions).

### Característiques principals

* **Cerca i filtres en temps real** per etapa, matèria, convocatòria i any, amb recompte de resultats en viu i suggeriments quan no hi ha coincidències.
* **Solucions i criteris oficials** desplegables a cada targeta: captura de la resolució o resposta correcta, amb la indicació clara quan una prova antiga no té solució digitalitzada.
* **Còpia al porta-retalls amb un clic**: la captura es converteix a PNG al navegador (`Clipboard API`) i s'enganxa directament a Word, Google Docs, Canva o LaTeX. Si el navegador bloqueja el permís, ofereix la descàrrega.
* **Carret de preguntes i fitxa A4**: selecciones exercicis de qualsevol any i convocatòria, els reordenes, i el mode d'impressió (`@media print`) maqueta una fitxa neta amb capçalera editable (títol, curs, data i nom) i **cap enunciat partit entre pàgines** (`break-inside: avoid`).

### Impacte

* **790 preguntes** oficials consultables en menys d'un segon, sense registrar-se ni descarregar cap PDF.
* El que abans eren 10–15 minuts de captures manuals per pregunta queda reduït a **un clic** (còpia directa) o a **dos clics** (fitxa completa imprimible).
* Cost d'infraestructura: **zero**. Tot el servei és estàtic i gratuït, i el codi és públic per a la comunitat docent.
