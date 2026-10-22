import { useEffect, useRef } from 'react'

// Curseur « futuriste » : point lumineux + anneau élastique + traînée de comète.
//  • sur un lien / bouton   → l'anneau grossit et se remplit
//  • sur [data-cursor="X"]  → l'anneau affiche le texte X (ex: « Voir »)
//  • les boutons .btn sont « magnétiques » (ils suivent légèrement le curseur)
// Désactivé automatiquement sur écran tactile.
const TRAIL = 9

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const label = useRef(null)
  const trail = useRef([])

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    document.documentElement.classList.add('has-cursor')
    const pos = { x: -200, y: -200 }
    const rpos = { x: -200, y: -200 }
    const pts = Array.from({ length: TRAIL }, () => ({ x: -200, y: -200 }))
    let raf
    let magnet = null

    const move = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      const t = e.target
      const custom = t.closest?.('[data-cursor]')
      const hot = t.closest?.('a, button, input, select, textarea, label, [data-hover]')
      ring.current.classList.toggle('hot', !!hot && !custom)
      ring.current.classList.toggle('label', !!custom)
      label.current.textContent = custom ? custom.getAttribute('data-cursor') : ''

      const btn = t.closest?.('.btn')
      if (magnet && magnet !== btn) { magnet.style.setProperty('--tx', '0px'); magnet.style.setProperty('--ty', '0px') }
      magnet = btn || null
      if (btn) {
        const r = btn.getBoundingClientRect()
        btn.style.setProperty('--tx', `${(e.clientX - (r.left + r.width / 2)) * 0.22}px`)
        btn.style.setProperty('--ty', `${(e.clientY - (r.top + r.height / 2)) * 0.3}px`)
      }
    }
    const down = () => ring.current.classList.add('down')
    const up = () => ring.current.classList.remove('down')
    const leave = () => { pos.x = pos.y = -200 }

    const loop = () => {
      rpos.x += (pos.x - rpos.x) * 0.17
      rpos.y += (pos.y - rpos.y) * 0.17
      ring.current.style.transform = `translate(${rpos.x}px, ${rpos.y}px)`
      let px = pos.x
      let py = pos.y
      pts.forEach((p, i) => {
        p.x += (px - p.x) * 0.38
        p.y += (py - p.y) * 0.38
        const el = trail.current[i]
        if (el) el.style.transform = `translate(${p.x}px, ${p.y}px) scale(${1 - i / TRAIL})`
        px = p.x
        py = p.y
      })
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.addEventListener('mouseleave', leave)
    loop()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.removeEventListener('mouseleave', leave)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  return (
    <div aria-hidden="true">
      {Array.from({ length: TRAIL }, (_, i) => (
        <i key={i} ref={(el) => (trail.current[i] = el)} className="cursor-trail" style={{ opacity: 0.5 - i * 0.05 }} />
      ))}
      <div ref={ring} className="cursor-ring"><span ref={label} /></div>
      <div ref={dot} className="cursor-dot" />
    </div>
  )
}
