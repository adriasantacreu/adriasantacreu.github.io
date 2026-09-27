import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date)
}

// Les traduccions segueixen la convenció index.mdx (CA), index.en.mdx (EN), index.es.mdx (ES).
// Astro només elimina un segment /index final exacte, de manera que els slugs EN/ES queden
// "gencat-cb-forms/indexen" i "gencat-cb-forms/indexes". Sense treure aquest sufix les rutes
// es generen com /en/projects/gencat-cb-forms/indexen i totes les pàgines EN/ES donen 404.
export function cleanSlug(slug: string) {
  return slug.replace(/\/index.*$/, "")
}

// Enllaç canònic d'una entrada amb el prefix d'idioma correcte (el català va sense prefix).
export function entryHref(collection: string, slug: string, locale = "") {
  const prefix = !locale || locale === "ca" ? "" : `/${locale}`
  return `${prefix}/${collection}/${cleanSlug(slug)}`
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "")
  const wordCount = textOnly.split(/\s+/).length
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed()
  return `${readingTimeMinutes} min read`
}


export function truncateText(str: string, maxLength: number): string {
  const ellipsis = '…';

  if (str.length <= maxLength) return str;

  const trimmed = str.trimEnd();
  if (trimmed.length <= maxLength) return trimmed;

  const cutoff = maxLength - ellipsis.length;
  let sliced = str.slice(0, cutoff).trimEnd();

  return sliced + ellipsis;
}