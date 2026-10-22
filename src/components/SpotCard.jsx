// Carte « vivante » : halo qui suit le curseur (--mx/--my), inclinaison 3D (--rx/--ry)
// et bordure lumineuse animée au survol (voir .spot en CSS).
export default function SpotCard({ children, className = '', as: Tag = 'div', tilt = true, ...rest }) {
  const onMove = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    if (tilt) {
      el.style.setProperty('--ry', `${(x / r.width - 0.5) * 7}deg`)
      el.style.setProperty('--rx', `${(0.5 - y / r.height) * 7}deg`)
    }
  }
  const onLeave = (e) => {
    e.currentTarget.style.setProperty('--rx', '0deg')
    e.currentTarget.style.setProperty('--ry', '0deg')
  }
  return (
    <Tag className={`spot ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} {...rest}>
      {children}
    </Tag>
  )
}
