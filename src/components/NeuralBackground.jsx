import { useEffect, useRef } from 'react'

// Réseau neuronal vivant : nœuds, liaisons, impulsions de données qui circulent,
// et réaction au curseur (attraction + faisceaux violets).
export default function NeuralBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const mouse = { x: -9999, y: -9999 }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, nodes, pulses, raf

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(Math.floor((w * h) / 13000), 110)
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() * 1.7 + 0.7,
      }))
      pulses = []
    }

    const LINK = 150
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const n of nodes) {
        if (!reduce) { n.x += n.vx; n.y += n.vy }
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
        const dm = Math.hypot(n.x - mouse.x, n.y - mouse.y)
        if (dm < 170 && !reduce) { n.x -= (mouse.x - n.x) * 0.006; n.y -= (mouse.y - n.y) * 0.006 }
      }
      const links = []
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            links.push([a, b])
            ctx.strokeStyle = `rgba(80,190,255,${(1 - d / LINK) * 0.38})`
            ctx.lineWidth = 0.8
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (dm < 200) {
          ctx.strokeStyle = `rgba(160,110,255,${(1 - dm / 200) * 0.6})`
          ctx.lineWidth = 1
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke()
        }
        ctx.fillStyle = dm < 200 ? '#a06eff' : '#5cd0ff'
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.2832); ctx.fill()
      }
      // impulsions de données
      if (!reduce && links.length && pulses.length < 9 && Math.random() < 0.05) {
        pulses.push({ l: links[(Math.random() * links.length) | 0], t: 0 })
      }
      pulses = pulses.filter((p) => p.t < 1)
      for (const p of pulses) {
        p.t += 0.025
        const [a, b] = p.l
        const x = a.x + (b.x - a.x) * p.t
        const y = a.y + (b.y - a.y) * p.t
        const g = ctx.createRadialGradient(x, y, 0, x, y, 12)
        g.addColorStop(0, 'rgba(120,240,255,.95)')
        g.addColorStop(1, 'rgba(120,240,255,0)')
        ctx.fillStyle = g
        ctx.beginPath(); ctx.arc(x, y, 12, 0, 6.2832); ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    const move = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const leave = () => { mouse.x = mouse.y = -9999 }
    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
    }
  }, [])

  return <canvas ref={ref} className="neural" aria-hidden="true" />
}
