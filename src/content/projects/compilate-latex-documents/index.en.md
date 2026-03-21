---
title: "LaTeX → PDF Compiler (GitHub Actions)"
summary: "A pipeline that compiles LaTeX exams automatically in the cloud: push, wait 2 minutes, and the PDF is ready with logos and corporate typography."
date: "Mar 20 2026"
draft: false
lang: en
tags:
- LaTeX
- GitHub Actions
- CI/CD
- Education
repoUrl: https://github.com/adriasantacreu/compilate-latex-documents
---

As a teacher, every exam I wrote in LaTeX had to be compiled locally — managing fonts, logos, paths... a real headache. I decided to automate it completely: **push and the PDF generates itself**.

## How it works

```
edit exam.tex  →  git push  →  GitHub Actions compiles  →  PDF in the repo
```

GitHub Actions runs XeLaTeX inside a Docker container with `texlive-full`. Fonts (Noto Sans) and logos are bundled inside the repository itself, so **there are no local dependencies**: it works from any machine, without installing anything.

Once compiled, the bot commits the PDF back to the repo (`[skip ci]` to avoid infinite loops) and saves it as a downloadable artifact for 90 days.

## Exam Template

The corporate template includes:

- **Logos** from the school and the Generalitat on every page (via `\fancyhdr`)
- **Rotating colours** per section: BrightPurple → BrightGreen → BrightBlue
- **Multiple-choice section** with an answer grid and configurable penalties
- **Problem section** with checkboxes (`tcolorbox`) and TikZ graphs
- **Numbered pages** with a circle at the bottom right

Everything is configurable from a variables block at the top of the file:

```latex
\newcommand{\assignatura}{Matemàtiques I}
\newcommand{\curs}{1r Batxillerat}
\newcommand{\dataexamen}{20 de març del 2026}
\newcommand{\puntstest}{4}
\newcommand{\puntsproblemes}{6}
```

## Example Generated PDF

<iframe
  src="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/adriasantacreu/compilate-latex-documents/main/examen.pdf&embedded=true"
  width="100%"
  height="700px"
  style="border: 1px solid #e5e7eb; border-radius: 8px;"
  title="Example generated exam"
></iframe>

*Mathematics I — 1st Year Bachillerato · Algebra and Trigonometry*

## Impact

Every LaTeX exam I produced used to cost me 10–15 minutes of environment setup. Now: **zero**. I open the `.tex`, write the questions, push. Two minutes later the print-ready PDF is there, with perfect corporate styling.
