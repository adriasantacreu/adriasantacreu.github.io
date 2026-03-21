---
title: "GAS Doc Generator"
summary: "Sistema de automatización documental con Google Apps Script que reduce el tiempo de gestión de 4 horas a menos de 45 minutos."
date: "Jan 10 2026"
draft: false
lang: es
tags:
- Google Apps Script
- JavaScript
- Automatización
- Productividad
demoUrl: https://github.com/adriasantacreu/gas-doc-generator
repoUrl: https://github.com/adriasantacreu/gas-doc-generator
---

### 💡 Motivación
Este proyecto nace de una necesidad real en la gestión de tutorías escolares. La tarea de generar manualmente informes personalizados para cada alumno (copias, cambios de nombre, edición de datos) era un proceso tedioso de más de 4 horas con un alto riesgo de error humano.

### 🛠️ La Solución Técnica
He desarrollado un sistema integrado en **Google Sheets** que actúa como motor de generación documental. Usando **JavaScript (Google Apps Script)**, la herramienta lee datos de una hoja de cálculo y los inyecta en plantillas de Google Docs de forma dinámica.

### ✨ Características Principales
* **Interfaz Profesional**: Menús personalizados y ventanas modales construidas con HTML5 y CSS3 (Google Sans).
* **Sistema de Plantillas Inteligente**: Detección automática de plantillas en la misma carpeta del archivo, garantizando la portabilidad.
* **Inyección Multisección**: Sustitución de variables `{{tag}}` en el cuerpo, encabezados, pies de página e incluso en el título del archivo.
* **Escalabilidad**: Diseñado para ser replicable; ya ha sido utilizado con éxito por otros docentes del centro.

### 🚀 Impacto
La automatización ha permitido:
1. **Reducir el tiempo de ejecución** en un 80%.
2. **Eliminar errores de transcripción**.
3. **Mejorar la UX** del profesorado con mensajes de estado en tiempo real (toasts) y enlaces directos a los documentos generados.

> "Pasar de 4 horas de trabajo mecánico a pocos minutos de ejecución permite centrar el esfuerzo en lo que realmente importa: el análisis de los datos y la atención al alumnado."
