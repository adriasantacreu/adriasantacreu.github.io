---
title: "Mostrari de proves oficials"
summary: "Cercador web de preguntes oficials de PAU (Matemàtiques II i CCSS) i de Competències Bàsiques de Catalunya: 1.005 exercicis PAU i 77 activitats CCBB amb 627 ítems, cada un amb la captura original, cerca instantània al navegador i fitxes A4 imprimibles. 100% estàtic."
date: "Sep 29 2026"
draft: false
tags:
  - TypeScript
  - Vite
  - MiniSearch
  - SQLite
  - PyMuPDF
  - OpenCV
  - Docència
demoUrl: https://adriasantacreu.github.io/banc-proves-oficials/
repoUrl: https://github.com/adriasantacreu/banc-proves-oficials
---

### Motivació

Quan prepares una fitxa d'exercicis, la pregunta que val la pena treballar gairebé sempre ja existeix: és en una PAU d'un any concret o en una prova de Competències Bàsiques. El problema no és la manca de material, sinó **la fricció per trobar-lo i extreure'l**: PDF de desenes de pàgines, captures fetes a mà i solucions en fitxers a part.

Aquest projecte converteix les proves oficials en una eina de consulta: escrius «matriu» i tens la captura neta de cada pregunta, la referència exacta (any, convocatòria, sèrie, número i punts) i la solució oficial a un clic.

### Què té dins

* **PAU**: 1.005 exercicis, 528 de Matemàtiques II (1997–2025) i 477 de Matemàtiques aplicades a les CCSS (2000–2025), amb l'enunciat i la solució oficial capturats per separat.
* **Competències Bàsiques**: 77 activitats de les proves de 4t i 2n d'ESO (2021–2026), amb 627 ítems. La unitat és l'**activitat**: el context (text, figures) es veu sempre, i cada ítem té la seva pròpia captura i la clau oficial.
* **2.526 imatges** WebP sense pèrdua, ~100 MB en total.
* **Formularis**: les proves de Competències Bàsiques també són [formularis de Google autocorregibles](https://drive.google.com/drive/folders/1J-LcDfdiySsMW4sWm-beSx4uvzT3odDm), a la meva carpeta de Drive.

### Com s'ha fet

**Dues bases de dades, una capa prima per damunt.** Cada col·lecció té la seva base (SQLite amb FTS5) i un `check` que s'atura si alguna cosa no quadra: el recompte d'exercicis ha de ser igual al de l'índex oficial, cada exercici ha de tenir captura d'enunciat, cap enunciat pot dur text de solució, cap context pot contenir un ítem i els marges de les captures són nets. Les excepcions que s'accepten estan escrites a un fitxer, no amagades al codi.

**El mostrari només llegeix les bases.** Un script d'export valida els recomptes, converteix a WebP i genera un índex lleuger (~580 KB) i un corpus de text a part (~1,9 MB) que es carrega després del primer pintat. Això manté el primer pintat ràpid.

**Front-end estàtic** (TypeScript + Vite, sense frameworks):

* Cerca amb **MiniSearch** al navegador: prefixos, tolerància a errades i sense accents («calcul» troba «càlcul»).
* Filtres per col·lecció, bloc, convocatòria i rang d'anys, amb recompte en viu. L'estat viu al hash de la URL, de manera que una cerca es pot enllaçar.
* **Còpia al porta-retalls**: la captura es converteix a PNG al navegador i s'enganxa a Word, Docs o LaTeX.
* **Carret i fitxa A4** imprimible, amb o sense solucions i amb cap enunciat partit entre pàgines.

### Què he après (i què va fallar)

La primera versió va sortir amb 790 exercicis i semblava bé, però no ho estava: el mostrari retallava les captures pel seu compte, els sub-ítems reutilitzaven la captura del pare i hi havia textos que només eren el resum de l'activitat. Cap tasca no s'havia comprovat mirant el resultat. Vaig refer-ho des de les fonts: cada base té les seves comprovacions i, abans de donar una fase per acabada, es genera un **full de miniatures** perquè una persona el repassi. Ha estat la part que més ha valgut la pena.

### Estat i límits

* Lighthouse: escriptori 98 / 100 / 100 / 100 i mòbil 87 / 100 / 100 / 100 (rendiment, accessibilitat, bones pràctiques i SEO), sense desplaçaments de disseny.
* Els blocs i temes són una classificació proposada que encara he de revisar a mà.
* Dos contexts de la prova CTE de 2n d'ESO (2024) duen un ítem a dins: són una excepció documentada.
* Les captures provenen de documents oficials de la Generalitat de Catalunya i es publiquen amb finalitat docent.
