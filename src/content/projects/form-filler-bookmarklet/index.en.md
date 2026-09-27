---
title: "Automatic form filler bookmarklet"
summary: "Lightweight browser bookmarklet to automate recurring web form completion with configurable input profiles."
date: "May 20 2025"
draft: false
lang: en
tags:
- JavaScript
- Automation
- Productivity
repoUrl: https://github.com/adriasantacreu/form-filler-bookmarklet
---

### Motivation
Repetitive manual data entry across web forms and testing environments is prone to input errors and fatigue. This bookmarklet addresses this workflow friction without requiring full-fledged third-party browser extensions.

### Technical solution
Engineered in **vanilla JavaScript** as a self-contained IIFE wrapped in a bookmark URL (`javascript:...`). Upon execution, it traverses the active page's DOM, identifies target input fields (`input`, `select`, `textarea`) by name or attribute heuristics, populates preconfigured data, and dispatches native events (`input`, `change`) to trigger reactive UI state updates in modern frameworks.

### Key features
* **Zero install friction**: Runs instantly across desktop browsers without elevated extensions permissions.
* **Reactive framework support**: Emits synthetic DOM events ensuring forms built with React, Vue, or Angular detect changes correctly.
* **Custom profile configuration**: Clean, transparent JSON mapping for fast profile customization.

### Impact
Significantly optimizes recurring testing cycles and administrative data submissions, converting minutes of manual form filling into a single click.
