---
title: "Generació de materials amb IA i LaTeX"
summary: "Automatització del flux de treball docent: des de l'enunciat amb LLMs fins al PDF final amb LaTeX."
date: "Jan 11 2026"
draft: false
tags:
- Automatització
- n8n
- LaTeX
- Python
- IA
demoUrl: https://github.com/adriasantacreu
repoUrl: https://github.com/adriasantacreu
---

### El sistema
He desenvolupat un flux on un **model LLM** genera el contingut acadèmic, el qual es processa mitjançant **Python** per assegurar la coherència científica i es maqueta automàticament en **LaTeX**.

Aquest mètode permet:
* Generar variants úniques d'exàmens i exercicis.
* Mantenir una qualitat tipogràfica professional científica.
* Automatitzar la correcció mitjançant metadades en el mateix codi LaTeX.

El motor d'orquestració d'aquest projecte és **n8n**, que connecta les crides als models de llenguatge amb el servidor local de renderització.