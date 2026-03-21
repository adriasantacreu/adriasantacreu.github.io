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
I developed a workflow where **AI (LLM)** generates the academic content, which is then processed by **Python** to ensure physical consistency and automatically typeset in **LaTeX**.

This approach makes it possible to:
* Generate unique variants of exams and exercises.
* Maintain professional scientific typographic quality.
* Automate grading through metadata embedded in the LaTeX source code.

The orchestration engine for this project is **n8n**, which connects the language model APIs with the local rendering server.
