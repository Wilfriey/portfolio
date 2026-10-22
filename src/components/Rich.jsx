// "des *mots* colorés" → les mots entre astérisques deviennent <em> (dégradé vert/cyan).
export default function Rich({ text }) {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith('*') ? <em key={i}>{part.slice(1, -1)}</em> : <span key={i}>{part}</span>,
  )
}
