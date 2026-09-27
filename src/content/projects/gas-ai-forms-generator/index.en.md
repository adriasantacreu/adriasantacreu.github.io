---
title: "GAS AI Forms Generator"
summary: "Google Apps Script web app that automates structured Google Form generation from user prompts and attached documents."
date: "Jan 18 2026"
draft: false
lang: en
tags:
- Google Apps Script
- AI
- Forms
logos:
- google-forms
repoUrl: https://github.com/adriasantacreu/gas-ai-forms-generator
---

### Motivation
Drafting formative quizzes and surveys in Google Forms requires repetitive manual data entry—copying questions, answers, and feedback rules one by one. This project streamlines form creation while preserving complete educator oversight.

### Technical solution
Engineered as a lightweight web app using **Google Apps Script**, the system queries language models to structure questions from source notes into typed JSON. It subsequently utilizes the **Google Forms API (FormApp)** to programmatically generate and publish the form in Google Drive.

### Key features
* **Direct Google Forms creation**: Automatically populates multiple-choice questions, short texts, and logical sections.
* **Source grounded**: Generates questions strictly based on user-provided class notes or syllabus excerpts.
* **Zero local dependencies**: Operates entirely within the Google Workspace cloud environment.

### Impact
Significantly cuts down preparation time for classroom checks and diagnostics, allowing teachers to dedicate their energy to instructional design.
