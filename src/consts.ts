import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Adrià Santacreu",
  DESCRIPTION: "Graduat en Física (UB). Docent i Data Scientist. Especialista en automatització amb n8n, AppScript i IA aplicada a l'educació i la productivitat.",
  AUTHOR: "Adrià Santacreu Giménez",
}

// Work Page (Experiència)
export const WORK: Page = {
  TITLE: "Experiència",
  DESCRIPTION: "Trajectòria acadèmica, docència i solucions tecnològiques implementades.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Reflexions sobre IA Open Source, automatització de processos i ciència de dades.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projectes",
  DESCRIPTION: "Recull de projectes tècnics: des de simulacions físiques fins a automatitzacions complexes.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Cercar",
  DESCRIPTION: "Cerca entre tots els meus articles i projectes.",
}

// Links (Navegació en Català)
export const LINKS: Links = [
  { 
    TEXT: "Inici", 
    HREF: "/", 
  },
  { 
    TEXT: "Experiència", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projectes", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "adriasantacreu@gmail.com",
    HREF: "mailto:adriasantacreu@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "adriasantacreu",
    HREF: "https://github.com/adriasantacreu"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Adrià Santacreu Giménez",
    HREF: "https://www.linkedin.com/in/adriasantacreu",
  }
]