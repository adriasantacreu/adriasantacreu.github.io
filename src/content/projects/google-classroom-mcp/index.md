---
title: "Google Classroom MCP"
summary: "Servidor MCP (Model Context Protocol) amb 43 eines per integrar Google Classroom directament en agents d'IA com Claude, eliminant la gestió manual de cursos, tasques i alumnes."
date: "Mar 20 2026"
draft: false
tags:
- MCP
- Google Classroom
- Node.js
- IA
- Automatització
- Docència
demoUrl: https://github.com/adriasantacreu/google-classroom-mcp
repoUrl: https://github.com/adriasantacreu/google-classroom-mcp
---

### 💡 Motivació

Gestionar Google Classroom des de la interfície web és lent i repetitiu: crear tasques, moure-les a tòpics, publicar anuncis, revisar lliuraments... totes operacions que consumeixen temps que podria dedicar-se a l'alumnat. L'objectiu era poder fer-ho tot amb llenguatge natural, directament des d'un assistent d'IA.

### 🛠️ La Solució Tècnica

He desenvolupat un servidor **MCP (Model Context Protocol)** en **Node.js/TypeScript** que exposa les APIs de Google Classroom com a eines natives per a models de llenguatge com Claude. El servidor implementa el protocol MCP de forma completa, permetent que l'IA pugui interactuar amb Classroom de la mateixa manera que un humà ho faria des del navegador.

```
┌─────────────────────────────────────────────────────┐
│                    USUARI (Docent)                   │
│  "Publica l'examen de demà a 1r de Batxillerat"     │
└───────────────────────┬─────────────────────────────┘
                        │ llenguatge natural
                        ▼
┌─────────────────────────────────────────────────────┐
│                   CLAUDE (LLM)                       │
│  Interpreta la instrucció i tria les eines MCP      │
└───────────────────────┬─────────────────────────────┘
                        │ crida a eines MCP
                        ▼
┌─────────────────────────────────────────────────────┐
│             GOOGLE CLASSROOM MCP SERVER              │
│  classroom_list_courses → troba el curs             │
│  classroom_create_assignment → crea la tasca        │
│  classroom_upload_to_classroom → adjunta el PDF     │
└───────────────────────┬─────────────────────────────┘
                        │ Google Classroom API
                        ▼
┌─────────────────────────────────────────────────────┐
│               GOOGLE CLASSROOM                       │
│  ✓ Tasca publicada amb PDF adjunt                   │
└─────────────────────────────────────────────────────┘
```

### ✨ 43 Eines Implementades

El servidor cobreix la totalitat de les operacions de Classroom:

* **Cursos**: crear, actualitzar, eliminar, llistar i cercar cursos.
* **Alumnes i professors**: afegir, eliminar i llistar membres.
* **Tasques i materials**: crear, editar, publicar i eliminar.
* **Tòpics**: organitzar el contingut del curs per temes.
* **Lliuraments**: consultar, qualificar i retornar tasques.
* **Rúbriques**: crear i gestionar criteris d'avaluació.
* **Anuncis**: publicar i gestionar comunicats al curs.
* **Tutors**: convidar i gestionar tutors legals dels alumnes.

### 🤖 Exemple real d'ús

Una sola instrucció en català pot desencadenar múltiples crides a l'API:

```
👤 "Quants alumnes han entregat l'examen de 4t Social?"

🤖 classroom_list_courses()          → troba "4 MAT SOCIAL 25/26"
   classroom_list_assignments()      → troba l'examen
   classroom_list_submissions()      → consulta els lliuraments

✅ "Han entregat 14 de 22 alumnes (63%). Els 8 que falten són: ..."
```

### 🔗 Integració amb Assistent Personal

Aquest MCP és la peça central d'un assistent personal docent construït al voltant de Claude Code. Combinat amb un servidor **Google Workspace MCP** (Gmail, Drive, Sheets, Docs, Calendar), permet automatitzar fluxos de treball complets:

```
Instrucció  →  Classroom MCP  →  Genera examen LaTeX
                                       ↓
            ←  Gmail MCP      ←  Publica a Classroom
```

### 🚀 Impacte

* **76 alumnes** gestionats en 4 cursos des d'una sola interfície conversacional.
* Operacions que requerien 10-15 clics es fan amb una instrucció en català.
* Base per a un ecosistema d'automatització docent en constant creixement.

> "Poder dir 'publica l'examen de demà a 1r de Batxillerat' i que passi sol és exactament el que buscava."
