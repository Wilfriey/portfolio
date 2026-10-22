import { useEffect, useState } from 'react'
import { projects } from '../data'
import { L } from '../loc'
import { useInView } from '../hooks'
import Icon from './Icon'
import PhotoSlot from './PhotoSlot'
import Reveal from './Reveal'
import Rich from './Rich'
import SpotCard from './SpotCard'

const TABS = ['all', 'academic', 'personal']

// Image + aperçu vidéo muet qui se charge seulement quand `play` est vrai.
function Media({ p, play, hint }) {
  const [ready, setReady] = useState(false)
  useEffect(() => { if (!play) setReady(false) }, [play])
  return (
    <div className="pm">
      <PhotoSlot src={p.image} fit={p.fit} bg={p.bg} pos={p.pos} variant="shot" label={p.title} hint={hint} alt={p.title} />
      {p.video && play && (
        <video className={ready ? 'on' : ''} src={p.video} muted loop playsInline autoPlay preload="auto" onCanPlay={() => setReady(true)} style={{ objectFit: p.fit || 'cover' }} />
      )}
    </div>
  )
}

function Actions({ p, labels, onOpen }) {
  return (
    <div className="pc-actions">
      <button className="btn lime sm" onClick={() => onOpen(p)}>
        <Icon name={p.video ? 'play' : 'arrow'} size={16} /> {p.video ? labels.demo : labels.open}
      </button>
      {p.link && <a className="btn ghost sm" href={p.link} target="_blank" rel="noreferrer"><Icon name="external" size={16} /> {labels.live}</a>}
      {p.repo && <a className="btn ghost sm" href={p.repo} target="_blank" rel="noreferrer"><Icon name="github" size={16} /> {labels.code}</a>}
      {p.cta && <a className="btn ghost sm" href={p.cta.href}>{p.cta.label} <Icon name="arrow" size={16} /></a>}
    </div>
  )
}

// Projet « à la une » : grande vitrine avec ce que le projet a apporté.
function Featured({ p, labels, catLabel, onOpen }) {
  const [ref, seen] = useInView({ threshold: 0.3 })
  const [hover, setHover] = useState(false)
  return (
    <Reveal className="feat-wrap">
      <SpotCard className="card feat" tilt={false}>
        <button ref={ref} className="feat-media" onClick={() => onOpen(p)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} data-cursor={p.video ? labels.demo : labels.open}>
          <Media p={p} play={seen || hover} />
          <span className="feat-flag"><Icon name="chart" size={14} /> {labels.featured} · {catLabel}</span>
          {p.video && <span className="play big"><Icon name="play" size={26} /></span>}
        </button>
        <div className="feat-body">
          <div className="feat-left">
            <div className="pc-meta">
              <span className="status-pill static">{p.status}</span>
              {p.badge && <span className="badge-pill static">{p.badge}</span>}
            </div>
            <p className="pc-type">{p.type}</p>
            <h3>{p.title}</h3>
            <p className="pc-tag">{p.tagline}</p>
            <p className="feat-sum">{p.summary}</p>
            <div className="tags">{p.tags.map((tg) => <span key={tg}>{tg}</span>)}</div>
            {p.note && <p className="risk-note">{p.note}</p>}
            <Actions p={p} labels={labels} onOpen={onOpen} />
          </div>

          {p.learned && (
            <div className="feat-right">
              <p className="mini-label">{p.learnedLabel}</p>
              <ul className="learned">
                {p.learned.map((l, i) => (
                  <li key={i}>
                    <span className="ln">{String(i + 1).padStart(2, '0')}</span>
                    <div><strong>{l.t}</strong><p>{l.d}</p></div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </SpotCard>
    </Reveal>
  )
}

function ProjectCard({ p, labels, catLabel, onOpen, i }) {
  const [hover, setHover] = useState(false)
  return (
    <SpotCard className="card pc" style={{ animationDelay: `${i * 80}ms` }}>
      <button className="pc-media" onClick={() => onOpen(p)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} data-cursor={p.video ? labels.demo : labels.open}>
        <Media p={p} play={hover} />
        <span className="status-pill">{p.status}</span>
        <span className="cat-chip">{catLabel}</span>
        {p.video && <span className="play"><Icon name="play" size={20} /></span>}
      </button>
      <div className="pc-body">
        {p.badge && <span className="badge-pill static">{p.badge}</span>}
        <p className="pc-type">{p.type}</p>
        <h3>{p.title}</h3>
        <p className="pc-tag">{p.tagline}</p>
        <p className="pc-sum">{p.summary}</p>
        <div className="tags">{p.tags.map((tg) => <span key={tg}>{tg}</span>)}</div>
        <Actions p={p} labels={labels} onOpen={onOpen} />
      </div>
    </SpotCard>
  )
}

function Research({ lang }) {
  const r = projects.research
  return (
    <Reveal className="research">
      <div className="research-head">
        <span className="ico"><Icon name="chart" size={22} /></span>
        <div>
          <p className="mini-label">{r.label[lang]}</p>
          <h3>{r.title[lang]}</h3>
        </div>
      </div>
      <ul>
        {r.points[lang].map((pt) => (
          <li key={pt}><Icon name="check" size={16} />{pt}</li>
        ))}
      </ul>
    </Reveal>
  )
}

export default function ProjectsSection({ lang, onOpen }) {
  const [tab, setTab] = useState('all')
  const labels = L(projects.labels, lang)
  const all = projects.items.map((p) => L(p, lang))
  const list = all.filter((p) => tab === 'all' || p.category === tab)
  const featured = list.find((p) => p.featured) || list[0]
  const rest = list.filter((p) => p !== featured)
  const count = (id) => all.filter((p) => id === 'all' || p.category === id).length
  const catLabel = (p) => projects.single[p.category][lang]

  return (
    <div className="wrap">
      <Reveal className="head">
        <p className="label"><b>04</b><i />{projects.label[lang]}</p>
        <h2><Rich text={projects.title[lang]} /></h2>
        <p className="intro">{projects.intro[lang]}</p>
      </Reveal>

      <div className="cat-tabs" role="tablist">
        {TABS.map((id) => (
          <button key={id} role="tab" aria-selected={tab === id} className={tab === id ? 'on' : ''} onClick={() => setTab(id)}>
            {projects.tabs[id][lang]} <b>{count(id)}</b>
          </button>
        ))}
      </div>

      {tab === 'personal' && <Research lang={lang} />}

      {featured && <Featured key={featured.id + lang + tab} p={featured} labels={labels} catLabel={catLabel(featured)} onOpen={onOpen} />}

      <div className="pc-grid">
        {rest.map((p, i) => (
          <ProjectCard key={p.id + lang + tab} p={p} i={i} labels={labels} catLabel={catLabel(p)} onOpen={onOpen} />
        ))}
      </div>
    </div>
  )
}
