// Affiche la photo si `src` est renseigné, sinon un emplacement pointillé bien visible.
// fit = 'cover' (défaut) | 'contain' ; bg = couleur de fond derrière l'image.
export default function PhotoSlot({ src, alt = '', label, hint, className = '', variant = 'card', fit = 'cover', bg, pos }) {
  if (src) {
    return (
      <div className={`photo ${variant} ${className}`} style={bg ? { background: bg } : undefined}>
        <img src={src} alt={alt} loading="lazy" style={{ objectFit: fit, objectPosition: pos }} />
      </div>
    )
  }
  return (
    <div className={`photo empty ${variant} ${className}`} role="img" aria-label={label}>
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="24" cy="18" r="7" />
        <path d="M8 42c1.5-9 8-14 16-14s14.5 5 16 14" />
      </svg>
      <strong>{label}</strong>
      <small>{hint}</small>
    </div>
  )
}
