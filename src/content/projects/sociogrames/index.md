---
title: "Sociogrames"
summary: "Eina per analitzar i visualitzar la dinàmica relacional del grup classe mitjançant teoria de grafs i matrius de cohesió."
date: "Jun 25 2024"
draft: false
tags:
- Python
- Education
- Data Viz
logos:
- python
repoUrl: https://github.com/adriasantacreu/Sociogrames
---

### Motivació
Comprendre les dinàmiques de grup en una aula d'ESO o Batxillerat és clau per a la convivència, la detecció de conductes d'aïllament i la configuració d'equips cooperatius equilibrats. Fer aquesta anàlisi a mà a partir de qüestionaris sol ser lent i propens a passar per alt patrons rellevants.

### Solució tècnica
Desenvolupat en **Python**, el programa processa les respostes dels qüestionaris d'eleccions i rebutjos dels alumnes. Construeix la matriu d'adjacència i utilitza llibreries de grafs (com NetworkX) i visualització per representar les xarxes d'afinitats, afinitats recíproques i líders naturals.

### Característiques principals
* **Detecció de rols**: Identificació immediata d'alumnes líders, ponts de comunicació o alumnes en risc d'aïllament social.
* **Anonimització i privacitat**: Processament local sense enviar dades sensibles d'alumnes a servidors externs.
* **Mapes visuals clars**: Gràfics de xarxa configurables amb codis de colors per facilitar la interpretació a l'equip docent i d'orientació.

### Impacte
Proporciona als tutors i equips d'orientació una base objectiva i visual per prendre decisions sobre distribució de l'aula, intervencions preventives i creació de grups de treball.
