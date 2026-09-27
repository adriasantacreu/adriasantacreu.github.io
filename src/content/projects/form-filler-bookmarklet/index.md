---
title: "Emplenador automàtic de formularis (bookmarklet)"
summary: "Script lleuger executable des de la barra de marcadors del navegador per autoemplenar formularis web repetitius amb perfils de dades configurables."
date: "May 20 2025"
draft: false
tags:
- JavaScript
- Automatització
- Productivitat
repoUrl: https://github.com/adriasantacreu/form-filler-bookmarklet
---

### Motivació
En procediments administratius repetitius i entorns de proves de programari, introduir una vegada i una altra les mateixes dades en formularis web és una tasca monòtona i propensa a errors manuals. Aquest bookmarklet resol aquesta necessitat sense haver d'instal·lar extensions invasives al navegador.

### Solució tècnica
Escrit en **JavaScript natiu** encapsulat en una funció immediata (IIFE), el codi s'emmagatzema com un marcador del navegador (`javascript:...`). Quan s'executa, inspecciona el DOM de la pàgina activa, detecta els camps d'entrada (`input`, `select`, `textarea`) per id, nom o atributs i hi injecta els valors preconfigurats disparant els esdeveniments necessaris (`change`, `input`) perquè els frameworks moderns reconeguin els canvis.

### Característiques principals
* **Portabilitat total**: Funciona en qualsevol navegador modern sense permisos especials ni instal·lacions.
* **Compatibilitat amb formularis reactius**: Dispara esdeveniments DOM estàndard per assegurar que els formularis construïts amb React o Vue validin correctament els camps omplerts.
* **Configuració senzilla**: Perfils de dades editables en format JSON intern.

### Impacte
Estalvia temps en tasques recurrents de càrrega de dades o validació d'entorns de desenvolupament, convertint un procés de diversos minuts en un sol clic.
