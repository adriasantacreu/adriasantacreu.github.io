---
title: "Compilador LaTeX → PDF (GitHub Actions)"
summary: "Pipeline que compila exàmens LaTeX automàticament al núvol: push, espera 2 minuts, PDF llest amb logos i tipografia corporativa."
date: "Mar 20 2026"
draft: false
tags:
- LaTeX
- GitHub Actions
- CI/CD
- Educació
repoUrl: https://github.com/adriasantacreu/compilate-latex-documents
---

Com a professor, cada examen que feia en LaTeX havia de compilar-lo localment, gestionar les fonts, els logos, els paths... Un embolic. Vaig decidir automatitzar-ho del tot: **push i el PDF apareix sol**.

## Com funciona

```
edites examen.tex  →  git push  →  GitHub Actions compila  →  PDF al repo
```

GitHub Actions executa XeLaTeX dins d'un contenidor Docker amb `texlive-full`. Les fonts (Noto Sans) i els logos estan bundlejats al propi repositori, per tant **no hi ha cap dependència local**: funciona des de qualsevol màquina, sense instal·lar res.

Un cop compilat, el bot commiteja el PDF de tornada al repo (`[skip ci]` per evitar bucles) i el guarda com a artifact descàrregable durant 90 dies.

## Plantilla d'examen

La plantilla corporativa inclou:

- **Logos** de l'institut i la Generalitat a totes les pàgines (via `\fancyhdr`)
- **Colors rotatius** per seccions: BrightPurple → BrightGreen → BrightBlue
- **Part test** amb graella de respostes i penalitzacions configurables
- **Problemes** amb caixes de comprovació (`tcolorbox`) i gràfiques TikZ
- **Pàgina numerada** amb cercle al peu dret

Tot configurable des d'un bloc de variables a dalt del fitxer:

```latex
\newcommand{\assignatura}{Matemàtiques I}
\newcommand{\curs}{1r Batxillerat}
\newcommand{\dataexamen}{20 de març del 2026}
\newcommand{\puntstest}{4}
\newcommand{\puntsproblemes}{6}
```

## Exemple de PDF generat

<iframe
  src="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/adriasantacreu/compilate-latex-documents/main/examen.pdf&embedded=true"
  width="100%"
  height="700px"
  style="border: 1px solid #e5e7eb; border-radius: 8px;"
  title="Exemple d'examen generat"
></iframe>

*Matemàtiques I — 1r Batxillerat · Àlgebra i Trigonometria*

## Impacte

Cada examen que feia en LaTeX em costava 10–15 minuts de gestió d'entorn. Ara: **zero**. Obro el `.tex`, escric les preguntes, push. En dos minuts tinc el PDF per imprimir, amb el disseny corporatiu perfecte.
