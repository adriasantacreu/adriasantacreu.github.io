---
title: "AI-generated Teaching Materials with LaTeX"
summary: "Automation of the teaching workflow: from content generation with LLMs to the final PDF output with LaTeX."
date: "Jan 11 2026"
draft: false
lang: en
tags:
- Automation
- n8n
- LaTeX
- Python
- AI
demoUrl: https://github.com/adriasantacreu
repoUrl: https://github.com/adriasantacreu
---

### The system
I developed a workflow where an **LLM model** generates academic content, which is then processed with **Python** to ensure scientific consistency and automatically typeset in **LaTeX**.

This approach makes it possible to:
* Generate unique variants of exams and exercises.
* Maintain professional scientific typographic quality.
* Automate grading through metadata embedded directly in the LaTeX source code.

The orchestration engine for this project is **n8n**, which connects language model requests with the local rendering server.
