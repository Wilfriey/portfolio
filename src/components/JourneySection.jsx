import { useEffect, useRef, useState } from 'react'
import { journey, testimonials } from '../data'
import { L } from '../loc'
import { useRotate } from '../hooks'
import Icon from './Icon'
import Reveal from './Reveal'
import Rich from './Rich'
import SpotCard from './SpotCard'

// Parcours : colonne gauche collante (grand numéro + rail des étapes qui suit le
// défilement) et grandes cartes détaillées à droite.
export default function JourneySection({ lang, onMedia }) {
  const entries = journey.entries.map((e) => L(e, lang))
  const [active, setActive] = useState(0)
  const cards = useRef([])
  const [ti, setTi] = useRotate(testimonials.items.length, 7000)

  useEffect(() => {
    const io = new IntersectionObserver(
      (list) => list.forEach((e) => e.isIntersecting && setActive(Number(e.target.dataset.i))),
      { rootMargin: '-38% 0px -50% 0px' },
    )
    cards.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [entries.length])

  const goTo = (i) => cards.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  const cur = entries[active] || entries[0]
  const big = cur.year || String(active + 1).padStart(2, '0')

  return (
    <div className="wrap">
      <Reveal className="head">
        <p className="label"><b>06</b><i />{journey.label[lang]}</p>
        <h2><Rich text={journey.title[lang]} /></h2>
      </Reveal>

      <div className="xp">
        {/* ---------- Colonne gauche collante ---------- */}
        <aside className="xp-rail">
          <p className="xp-rail-label"><i />{journey.railLabel[lang]}</p>
          <div className="xp-big" key={big}>
            <strong>{big}</strong>
            {!cur.year && <span>/ {String(entries.length).padStart(2, '0')}</span>}
          </div>
          <p className="xp-now">{cur.period}</p>

          <ol className="xp-steps">
            {entries.map((e, i) => (
              <li key={e.id}>
                <button className={`${active === i ? 'on' : ''} ${i < active ? 'past' : ''}`} onClick={() => goTo(i)}>
                  <span className="dia" />
                  <span className="who">{e.org}</span>
                  <span className="kind">{journey.types[journey.entries[i].type][lang]}</span>
                </button>
              </li>
            ))}
          </ol>
        </aside>

        {/* ---------- Cartes ---------- */}
        <div className="xp-cards">
          {entries.map((e, i) => (
            <div key={e.id} ref={(el) => (cards.current[i] = el)} data-i={i}>
              <Reveal>
                <SpotCard className={`card xp-card ${active === i ? 'on' : ''}`} tilt={false}>
                  <div className="xp-head">
                    <span className="xp-dia"><b>{String(i + 1).padStart(2, '0')}</b></span>
                    <div>
                      <h3>
                        {e.link ? (
                          <a className="xp-title-link" href={e.link} target="_blank" rel="noopener noreferrer sponsored">
                            {e.title} <Icon name="external" size={18} />
                          </a>
                        ) : e.title}
                      </h3>
                      <p className="xp-org">{e.org}</p>
                    </div>
                    <span className="xp-type">{journey.types[journey.entries[i].type][lang]}</span>
                  </div>

                  <div className="xp-pills">
                    <span className={`xp-pill state ${e.live ? "ongoing" : ""}`}><i />{e.status}</span>
                    <span className="xp-pill">{e.period}</span>
                  </div>

                  <p className="xp-sum">{e.summary}</p>

                  <ul className="xp-bullets">
                    {e.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>

                  {e.tags && <div className="tags">{e.tags.map((tg) => <span key={tg}>{tg}</span>)}</div>}

                  {(e.image || e.link) && (
                    <div className="xp-foot">
                      {e.image && (
                        <button className="tl-media" onClick={() => onMedia(journey.entries[i])} data-cursor={e.video ? 'Play' : 'Voir'}>
                          <img src={e.image} alt={e.org} loading="lazy" />
                          {e.video && <span className="play"><Icon name="play" size={18} /></span>}
                        </button>
                      )}
                      {e.link && (
                        <div className="xp-link">
                          <a className="btn lime sm" href={e.link} target="_blank" rel="noopener noreferrer sponsored">
                            <Icon name="external" size={16} /> {e.linkLabel}
                          </a>
                          {e.note && <span className="tl-note">{e.note}</span>}
                        </div>
                      )}
                    </div>
                  )}

                  {e.location && <p className="xp-loc"><Icon name="support" size={14} /> {e.location}</p>}
                </SpotCard>
              </Reveal>
            </div>
          ))}

          {/* Langues & certifications */}
          <Reveal className="xp-extra">
            <div>
              <h4 className="mini-label">{journey.extraLabels.languages[lang]}</h4>
              <ul className="mini-list">
                {journey.languages.map((l, i) => <li key={i}><strong>{l.name[lang]}</strong><span>{l.level[lang]}</span></li>)}
              </ul>
            </div>
            {journey.certs.length > 0 && (
              <div>
                <h4 className="mini-label">{journey.extraLabels.certs[lang]}</h4>
                <ul className="mini-list">
                  {journey.certs.map((c, i) => <li key={i}><strong>{c.name}</strong><span>{c.org} · {c.year}</span></li>)}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
      </div>

      {testimonials.enabled && (
        <Reveal className="testi">
          <p className="mini-label center">{testimonials.label[lang]}</p>
          <h3 className="testi-title"><Rich text={testimonials.title[lang]} /></h3>
          <SpotCard className="card pad quote" key={`${ti}-${lang}`}>
            <p>“{testimonials.items[ti].quote[lang]}”</p>
            <div><strong>{testimonials.items[ti].name}</strong><span>{testimonials.items[ti].role[lang]}</span></div>
          </SpotCard>
          <div className="dots">
            {testimonials.items.map((_, i) => <button key={i} className={ti === i ? 'on' : ''} onClick={() => setTi(i)} aria-label={`${i + 1}`} />)}
          </div>
        </Reveal>
      )}
    </div>
  )
}
