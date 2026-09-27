---
title: "GAS AI Forms Generator"
summary: "Aplicación web en Google Apps Script que genera formularios de Google estructurados automáticamente a partir de un prompt y documentos de referencia."
date: "Jan 18 2026"
draft: false
lang: es
tags:
- Google Apps Script
- IA
- Formularios
logos:
- google-forms
repoUrl: https://github.com/adriasantacreu/gas-ai-forms-generator
---

### Motivación
La elaboración de cuestionarios y pruebas formativas en Google Forms suele consumir tiempo trasladando preguntas, opciones y soluciones una a una. Esta herramienta automatiza la maquetación técnica sin sacrificar la supervisión del contenido.

### Solución técnica
Construida como una aplicación web sobre **Google Apps Script**, la herramienta procesa el tema o material de origen mediante modelos de lenguaje, estructurando la evaluación en un esquema validado. A continuación, utiliza la API de Google Forms (**FormApp**) para instanciar directamente el formulario en el Drive del usuario.

### Características principales
* **Creación nativa en Google Forms**: Genera preguntas tipo test, abiertas y secciones temáticas al instante.
* **Soporte de fuentes documentales**: Permite adjuntar textos base para garantizar que las preguntas coincidan con el currículo impartido.
* **Infraestructura serverless**: Funciona completamente sobre el entorno de Google Workspace sin configuraciones complejas.

### Impacto
Agiliza la preparación de evaluaciones formativas y sondeos pedagógicos, devolviendo tiempo docente a la labor de acompañamiento en el aula.
