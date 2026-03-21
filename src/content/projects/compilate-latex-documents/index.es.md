---
title: "Compilador LaTeX → PDF (GitHub Actions)"
summary: "Pipeline que compila exámenes LaTeX automáticamente en la nube: push, espera 2 minutos, PDF listo con logos y tipografía corporativa."
date: "Mar 20 2026"
draft: false
lang: es
tags:
- LaTeX
- GitHub Actions
- CI/CD
- Educación
repoUrl: https://github.com/adriasantacreu/compilate-latex-documents
---

Como profesor, cada examen que hacía en LaTeX tenía que compilarlo localmente, gestionar las fuentes, los logos, los paths... Un lío. Decidí automatizarlo por completo: **push y el PDF aparece solo**.

## Cómo funciona

```
editas examen.tex  →  git push  →  GitHub Actions compila  →  PDF en el repo
```

GitHub Actions ejecuta XeLaTeX dentro de un contenedor Docker con `texlive-full`. Las fuentes (Noto Sans) y los logos están incluidos en el propio repositorio, por lo tanto **no hay ninguna dependencia local**: funciona desde cualquier máquina, sin instalar nada.

Una vez compilado, el bot hace commit del PDF de vuelta al repo (`[skip ci]` para evitar bucles) y lo guarda como artefacto descargable durante 90 días.

## Plantilla de examen

La plantilla corporativa incluye:

- **Logos** del instituto y la Generalitat en todas las páginas (via `\fancyhdr`)
- **Colores rotativos** por secciones: BrightPurple → BrightGreen → BrightBlue
- **Parte test** con cuadrícula de respuestas y penalizaciones configurables
- **Problemas** con casillas de verificación (`tcolorbox`) y gráficas TikZ
- **Página numerada** con círculo en el pie derecho

Todo configurable desde un bloque de variables al inicio del archivo:

```latex
\newcommand{\assignatura}{Matemàtiques I}
\newcommand{\curs}{1r Batxillerat}
\newcommand{\dataexamen}{20 de març del 2026}
\newcommand{\puntstest}{4}
\newcommand{\puntsproblemes}{6}
```

## Ejemplo de PDF generado

<iframe
  src="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/adriasantacreu/compilate-latex-documents/main/examen.pdf&embedded=true"
  width="100%"
  height="700px"
  style="border: 1px solid #e5e7eb; border-radius: 8px;"
  title="Ejemplo de examen generado"
></iframe>

*Matemáticas I — 1r Bachillerato · Álgebra y Trigonometría*

## Impacto

Cada examen que hacía en LaTeX me costaba 10–15 minutos de gestión de entorno. Ahora: **cero**. Abro el `.tex`, escribo las preguntas, push. En dos minutos tengo el PDF para imprimir, con el diseño corporativo perfecto.
