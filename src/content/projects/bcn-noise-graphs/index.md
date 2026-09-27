---
title: "Gràfics de contaminació acústica a Barcelona"
summary: "Anàlisi i representació visual dels nivells de soroll ambiental als districtes de Barcelona a partir del portal Open Data BCN."
date: "Apr 03 2025"
draft: false
tags:
- JavaScript
- Data Viz
- Barcelona
- Open Data
repoUrl: https://github.com/adriasantacreu/bcn_noise_graphs
---

### Motivació
L'impacte de la contaminació acústica és un dels factors ambientals que més afecten la salut pública en zones urbanes denses. Aquest projecte analitza els registres sonors de la xarxa de sensors de Barcelona per fer accessible el diagnòstic acústic de cada barri.

### Solució tècnica
Processament i neteja dels conjunts de dades del portal **Open Data BCN** mitjançant scripts de dades i visualització web interactiva. Els mesuraments de decibels (diürns i nocturns) es creuen amb la delimitació dels districtes per mostrar comparatives històriques.

### Característiques principals
* **Comparativa territorial**: Gràfics de barres i evolució temporal segmentats per districtes i tipologia de vies (carrers de trànsit, zones de vianants).
* **Llindars OMS**: Contrast immediat amb els valors màxims recomanats per a la protecció de la salut auditiva i el descans.
* **Càrrega optimitzada**: Visualització fluida al navegador sense dependències de servidors pesats.

### Impacte
Permet consultar de manera directa i divulgativa l'evolució del soroll a la ciutat, facilitant la comprensió d'un problema ambiental que sovint queda amagat en informes estadístics complexos.
