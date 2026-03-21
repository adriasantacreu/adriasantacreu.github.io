---
title: "Generación de materiales con IA y LaTeX"
summary: "Automatización del flujo de trabajo docente: desde el enunciado con LLMs hasta el PDF final con LaTeX."
date: "Jan 11 2026"
draft: false
lang: es
tags:
- Automatización
- n8n
- LaTeX
- Python
- IA
demoUrl: https://github.com/adriasantacreu
repoUrl: https://github.com/adriasantacreu
---

### El sistema
He desarrollado un flujo donde la **IA (LLM)** genera el contenido académico, el cual se procesa mediante **Python** para asegurar la coherencia física y se maqueta automáticamente en **LaTeX**.

Este método permite:
* Generar variantes únicas de exámenes y ejercicios.
* Mantener una calidad tipográfica profesional científica.
* Automatizar la corrección mediante metadatos en el mismo código LaTeX.

El motor de orquestación de este proyecto es **n8n**, que conecta las APIs de los modelos de lenguaje con el servidor local de renderizado.
