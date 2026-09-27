---
title: "GAS AI Forms Generator"
summary: "Aplicació web en Google Apps Script que genera formularis de Google estructurats automàticament a partir d'un prompt i documents de referència."
date: "Jan 18 2026"
draft: false
tags:
- Google Apps Script
- AI
- Forms
logos:
- google-forms
repoUrl: https://github.com/adriasantacreu/gas-ai-forms-generator
---

### Motivació
La redacció d'avaluacions i qüestionaris diagnòstics a Google Forms requereix temps per traslladar enunciats, opcions múltiples i claus de resposta un a un des d'un document o apunts. L'objectiu és automatitzar aquest procés manual sense perdre control sobre el contingut generat.

### Solució tècnica
Desenvolupat com a webapp lleugera sobre **Google Apps Script**, l'eina connecta amb models d'IA per processar el text o tema demanat, extreure els conceptes clau i estructurar les preguntes en format JSON validat. Posteriorment, utilitza la **Google Forms API / FormApp** nativa per crear directament el formulari al compte de Google de l'usuari.

### Característiques principals
* **Injecció directa a Google Forms**: Crea preguntes d'opció múltiple, respostes curtes i seccions sense cap pas intermedi de copiar i enganxar.
* **Context documental**: Permet adjuntar apunts o fragments de text perquè l'avaluació reflecteixi fidelment el temari treballat a classe.
* **Execució en el núvol de Google**: Sense necessitat d'instal·lacions locals ni dependències externes complexes.

### Impacte
Redueix dràsticament el temps de preparació de proves curtes de repàs i enquestes d'aula, permetent al professorat concentrar-se en el disseny pedagògic i la tria d'indicadors.
