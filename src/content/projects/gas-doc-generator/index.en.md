---
title: "GAS Doc Generator"
summary: "Document automation system built with Google Apps Script that reduces management time from 4 hours to under 45 minutes."
date: "Jan 10 2026"
draft: false
lang: en
tags:
- Google Apps Script
- JavaScript
- Automation
- Productivity
demoUrl: https://github.com/adriasantacreu/gas-doc-generator
repoUrl: https://github.com/adriasantacreu/gas-doc-generator
---

### 💡 Motivation
This project was born out of a real need in the management of school tutoring sessions. Manually generating personalised reports for each student — copying documents, renaming them, editing data — was a tedious process taking over 4 hours with a high risk of human error.

### 🛠️ The Technical Solution
I developed a system integrated into **Google Sheets** that acts as a document generation engine. Using **JavaScript (Google Apps Script)**, the tool reads data from a spreadsheet and dynamically injects it into Google Docs templates.

### ✨ Key Features
* **Professional Interface**: Custom menus and modal windows built with HTML5 and CSS3 (Google Sans).
* **Smart Template System**: Automatic detection of templates in the same folder as the file, ensuring portability.
* **Multi-section Injection**: Replacement of `{{tag}}` variables in the body, headers, footers, and even in the file title.
* **Scalability**: Designed to be replicable; it has already been used successfully by other teachers at the school.

### 🚀 Impact
The automation has allowed:
1. **Reducing execution time** by 80%.
2. **Eliminating transcription errors**.
3. **Improving the UX** for teaching staff with real-time status messages (toasts) and direct links to the generated documents.

> "Going from 4 hours of mechanical work to a few minutes of execution means we can focus our efforts on what really matters: analysing the data and supporting students."
