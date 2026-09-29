---
title: "Official exams showcase"
summary: "Web search tool for official Catalan PAU questions (Mathematics II and Applied Social Sciences) and Basic Competences tests: 1,005 PAU exercises and 77 CCBB activities with 627 items, each with the original capture, instant in-browser search and printable A4 sheets. 100% static."
date: "Sep 29 2026"
draft: false
lang: en
tags:
  - TypeScript
  - Vite
  - MiniSearch
  - SQLite
  - PyMuPDF
  - OpenCV
  - Teaching
demoUrl: https://adriasantacreu.github.io/banc-proves-oficials/
repoUrl: https://github.com/adriasantacreu/banc-proves-oficials
---

### Motivation

When you prepare an exercise sheet, the question worth using almost always exists already: in a PAU exam from some year or in a Basic Competences test. The problem is not a lack of material but **the friction of finding and extracting it**: PDFs dozens of pages long, hand-made screenshots and solutions in separate files.

This project turns the official exams into a lookup tool: type "matriu" (matrix) and you get a clean capture of each question, its exact reference (year, session, series, number and points) and the official solution one click away.

### What's inside

* **PAU**: 1,005 exercises, 528 from Mathematics II (1997–2025) and 477 from Applied Mathematics for Social Sciences (2000–2025), with the statement and the official solution captured separately.
* **Basic Competences**: 77 activities from the 4th and 2nd year ESO tests (2021–2026), with 627 items. The unit is the **activity**: the context (text, figures) is always visible, and each item has its own capture and the official key.
* **2,526 lossless WebP images**, ~100 MB in total.
* **Forms**: the Basic Competences tests are also [self-grading Google Forms](https://drive.google.com/drive/folders/1J-LcDfdiySsMW4sWm-beSx4uvzT3odDm), in my Drive folder.

### How it was built

**Two databases, a thin layer on top.** Each collection has its own database (SQLite with FTS5) and a `check` that stops if anything doesn't add up: the number of exercises must equal the official index, every exercise must have a statement capture, no statement may carry solution text, no context may contain an item, and capture margins are clean. Accepted exceptions are written in a file, not hidden in the code.

**The showcase only reads the databases.** An export script validates the counts, converts to WebP and generates a light index (~580 KB) and a separate text corpus (~1.9 MB) loaded after first paint. This keeps first paint fast.

**Static front-end** (TypeScript + Vite, no frameworks):

* **MiniSearch** in the browser: prefixes, typo tolerance and accent-insensitive ("calcul" finds "càlcul").
* Filters by collection, block, session and year range, with live counts. State lives in the URL hash, so a search can be linked.
* **Copy to clipboard**: the capture is converted to PNG in the browser and pastes into Word, Docs or LaTeX.
* **Cart and printable A4 sheet**, with or without solutions and with no statement split across pages.

### What I learned (and what went wrong)

The first version shipped with 790 exercises and looked fine, but wasn't: the showcase cropped captures on its own, sub-items reused the parent's capture, and some texts were only the activity summary. No task had been checked by looking at the result. I rebuilt it from the sources: each database has its own checks and, before calling a phase done, a **thumbnail sheet** is generated for a person to review. It was the most worthwhile part.

### Status and limits

* Lighthouse: desktop 98 / 100 / 100 / 100 and mobile 87 / 100 / 100 / 100 (performance, accessibility, best practices and SEO), with no layout shift.
* Blocks and topics are a proposed classification I still have to review by hand.
* Two contexts of the 2nd-year ESO CTE test (2024) carry an item inside: a documented exception.
* Captures come from official Generalitat de Catalunya documents and are published for teaching purposes.
