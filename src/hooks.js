import { useEffect, useRef, useState } from 'react'

export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, seen]
}

export function useCountUp(target, active, duration = 1500) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf, start
    const step = (ts) => {
      start ??= ts
      const p = Math.min((ts - start) / duration, 1)
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target])
  return v
}

export function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      el && io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return active
}

// Progression (0 → 1) d'un élément pendant qu'il traverse l'écran.
export function useScrollProgress(ref) {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const v = (vh * 0.8 - r.top) / (r.height + vh * 0.25)
      setP(Math.min(1, Math.max(0, v)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return p
}

// Fait défiler un index à intervalle régulier (mots rotatifs, carrousel…).
export function useRotate(length, delay = 2200, paused = false) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (paused || length < 2) return
    const t = setInterval(() => setI((v) => (v + 1) % length), delay)
    return () => clearInterval(t)
  }, [length, delay, paused])
  return [i, setI]
}

// Effet « décryptage » : le texte se brouille puis se résout lettre par lettre.
export function useScramble(text, delay = 1700) {
  const [out, setOut] = useState(text)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setOut(text); return }
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/_#'
    let frame = 0
    let raf
    let timer = setTimeout(function run() {
      const step = () => {
        frame++
        const reveal = Math.floor(frame / 2)
        setOut(text.split('').map((c, i) => (c === ' ' || c === '—' || c === '&' || i < reveal ? c : chars[(Math.random() * chars.length) | 0])).join(''))
        if (reveal < text.length) raf = requestAnimationFrame(step)
      }
      step()
    }, delay)
    setOut(text.replace(/[^ —&]/g, '·'))
    // filet de sécurité : le texte final s'affiche toujours, même si l'animation est interrompue
    const safety = setTimeout(() => setOut(text), delay + text.length * 130 + 400)
    return () => { clearTimeout(timer); clearTimeout(safety); cancelAnimationFrame(raf) }
  }, [text])
  return out
}
