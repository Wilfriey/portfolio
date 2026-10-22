import { useEffect, useState } from 'react'

// Écran d'introduction : symbole ORYVO + compteur, puis fondu vers le site.
export default function Preloader({ logo }) {
  const [n, setN] = useState(0)
  const [done, setDone] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setGone(true); return }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / 1500, 1)
      setN(Math.round(100 * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
      else { setDone(true); setTimeout(() => setGone(true), 700) }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  if (gone) return null
  return (
    <div className={`preloader ${done ? 'done' : ''}`} aria-hidden="true">
      <div className="pre-core">
        <span className="pre-logo">{logo ? <img src={logo} alt="" /> : 'OR'}</span>
        <i className="pre-ring" />
      </div>
      <p className="pre-name">ORYVO</p>
      <div className="pre-bar"><i style={{ width: `${n}%` }} /></div>
      <p className="pre-n">{String(n).padStart(3, '0')}</p>
    </div>
  )
}
