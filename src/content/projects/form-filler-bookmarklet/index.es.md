---
title: "Rellenador automático de formularios (bookmarklet)"
summary: "Script ligero ejecutable desde la barra de marcadores del navegador para autorellenar formularios web repetitivos con perfiles de datos configurables."
date: "May 20 2025"
draft: false
lang: es
tags:
- JavaScript
- Automatización
- Productividad
repoUrl: https://github.com/adriasantacreu/form-filler-bookmarklet
---

### Motivación
En gestiones administrativas recurrentes y entornos de testing de software, introducir continuamente los mismos datos en formularios web resulta monótono y propenso a equivocaciones. Este bookmarklet soluciona el problema sin necesidad de instalar extensiones pesadas en el navegador.

### Solución técnica
Desarrollado en **JavaScript nativo** encapsulado en un marcador ejecutable (`javascript:...`). Al pulsarlo, inspecciona el DOM de la página activa, identifica los campos de entrada (`input`, `select`, `textarea`) por sus identificadores o atributos e inyecta los valores configurados disparando los eventos necesarios (`input`, `change`) para que los frameworks web reactivos validen el contenido.

### Características principales
* **Portabilidad absoluta**: Funciona de forma instantánea en cualquier navegador de escritorio.
* **Compatibilidad reactiva**: Dispara eventos nativos del DOM asegurando la validación en interfaces modernas.
* **Gestión de perfiles**: Configuración limpia de plantillas de datos en formato JSON.

### Impacto
Agiliza tareas repetitivas de entrada de datos y pruebas de interfaz, transformando una rutina manual de varios minutos en una acción inmediata de un solo clic.
