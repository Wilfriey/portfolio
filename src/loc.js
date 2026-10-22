// Résout récursivement les textes bilingues { fr, en } vers la langue demandée.
export function L(value, lang) {
  if (Array.isArray(value)) return value.map((v) => L(v, lang))
  if (value && typeof value === 'object') {
    if ('fr' in value && 'en' in value) return value[lang]
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, L(v, lang)]))
  }
  return value
}
