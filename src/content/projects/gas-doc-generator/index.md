---
title: "GAS Doc Generator"
summary: "Sistema d'automatització documental amb Google Apps Script que redueix el temps de gestió de 4 hores a menys de 45 minuts."
date: "Jan 10 2026"
draft: false
tags:
- Google Apps Script
- JavaScript
- Automatització
- Productivitat
demoUrl: https://github.com/adriasantacreu/gas-doc-generator
repoUrl: https://github.com/adriasantacreu/gas-doc-generator
---

### 💡 Motivació
Aquest projecte neix d'una necessitat real en la gestió de tutories escolars. La tasca de generar manualment informes personalitzats per a cada alumne (còpies, canvis de nom, edició de dades) era un procés tediós de més de 4 hores amb un alt risc d'error humà.

### 🛠️ Solució tècnica
He desenvolupat un sistema integrat a **Google Sheets** que actua com a motor de generació documental. Utilitzant **JavaScript (Google Apps Script)**, l'eina llegeix dades d'un full de càlcul i les injecta en plantilles de Google Docs de forma dinàmica.

### ✨ Característiques principals
* **Interfície Professional**: Menús personalitzats i finestres modals construïdes amb HTML5 i CSS3 (Google Sans).
* **Sistema de Plantilles Intel·ligent**: Detecció automàtica de plantilles en la mateixa carpeta del fitxer, garantint la portabilitat.
* **Injecció Multisecció**: Substitució de variables `{{tag}}` en el cos, capçaleres, peus de pàgina i fins i tot en el títol del fitxer.
* **Escalabilitat**: Dissenyat per ser replicable; ja ha estat utilitzat amb èxit per altres docents del centre.

### 🚀 Impacte
L'automatització ha permès:
1. **Reduir el temps d'execució** en un 80%.
2. **Eliminar errors de transcripció**.
3. **Millorar la UX** del professorat amb missatges d'estat en temps real (toasts) i enllaços directes als documents generats.

> "Passar de 4 hores de feina mecànica a pocs minuts d'execució permet centrar l'esforç en el que realment importa: l'anàlisi de les dades i l'atenció a l'alumnat."