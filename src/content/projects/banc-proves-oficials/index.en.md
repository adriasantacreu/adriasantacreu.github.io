---
title: "Official Exam Question Bank"
summary: "Web search engine for official Catalan exam questions (PAU and Basic Competencies): 790 exercises with 200 DPI captures, instant in-browser search, official solutions, one-click clipboard copy and printable A4 worksheets. 100% static on GitHub Pages."
date: "Sep 28 2026"
draft: false
tags:
  - TypeScript
  - Vite
  - Tailwind CSS
  - MiniSearch
  - PyMuPDF
  - OpenCV
  - Teaching
lang: en
demoUrl: https://adriasantacreu.github.io/banc-proves-oficials/
repoUrl: https://github.com/adriasantacreu/banc-proves-oficials
---

### Motivation

Whenever you prepare a worksheet, the question worth asking already exists: it sits in some year's PAU exam or in an official Basic Competencies test. The problem isn't the lack of material, it's **the friction of finding and extracting it**: dozens-of-pages PDFs, manual screenshots, solutions in separate files, and white margins everywhere.

This project turns years of official exams into an instant lookup tool: type "invertible matrix" and you get the clean capture of the question, its exact reference (year, session, series, number and points), the official solution and the grading criteria, one click away.

### Technical solution

**Documentary engineering pipeline** (Python + PyMuPDF + OpenCV):

* **PAU**: 163 Mathematics II exercises (1997–2025) from the *Pautec* compendium, with statement, solution and grading scale indexed in SQLite with full-text search (FTS5).
* **Basic Competencies**: 627 items from the official 4th and 8th grade tests (2021–2026), automatically cropped with geometric detection over the official PDFs. When the source font's character map is broken (the 2025 tests), a **Tesseract OCR fallback** locates item numbers on the rendered page.
* Every crop goes through `autocrop_tight` (OpenCV): clean white background, no leftover margins, **true 200 DPI sharpness**, published as **lossless WebP** (~15 KB per capture; 46 MB for the whole bank).

**100% static front-end** (TypeScript + Vite + Tailwind):

* The pre-built index (`proves.json`, 1 MB) is indexed in memory with **MiniSearch** on page load: instant search (< 10 ms) with prefixes, typo tolerance and **Catalan accent normalization** ("calcul" finds "càlcul").
* Zero backend: everything runs in the browser, hosted on GitHub Pages with automatic deployment (GitHub Actions).

### Key features

* **Real-time search and filters** by stage, subject, session and year, with live result counts and suggestions when nothing matches.
* **Official solutions and grading criteria** expandable on every card, clearly stating when an old test has no digitized solution.
* **One-click clipboard copy**: the capture is converted to PNG in the browser (`Clipboard API`) and pastes directly into Word, Google Docs, Canva or LaTeX. If the browser blocks the permission, it offers a download instead.
* **Question cart and A4 worksheet**: pick exercises from any year and session, reorder them, and the print mode (`@media print`) lays out a clean worksheet with an editable header (title, class, date and name) and **no statement ever split across pages** (`break-inside: avoid`).

### Impact

* **790 official questions** lookup-able in under a second, with no sign-up and no PDF downloads.
* What used to be 10–15 minutes of manual screenshotting per question is now **one click** (direct copy) or **two clicks** (complete printable worksheet).
* Infrastructure cost: **zero**. The whole service is static and free, and the code is public for the teaching community.
