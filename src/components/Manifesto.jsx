import { useRef } from 'react'
import { useScrollProgress } from '../hooks'

// Le texte se « révèle » mot par mot pendant le défilement. *mot* = mis en couleur.
export default function Manifesto({ text }) {
  const ref = useRef(null)
  const p = useScrollProgress(ref)
  const words = text.split(/\s+/).map((w) => ({ w: w.replace(/\*/g, ''), accent: w.includes('*') }))
  return (
    <p ref={ref} className="manifesto-text">
      {words.map((o, i) => (
        <span key={i} className={`mw ${i / words.length < p ? 'on' : ''} ${o.accent ? 'accent' : ''}`}>
          {o.w}{' '}
        </span>
      ))}
    </p>
  )
}
