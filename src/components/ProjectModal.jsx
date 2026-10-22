import { useEffect, useRef } from 'react'
import Icon from './Icon'
import PhotoSlot from './PhotoSlot'

// Fiche détaillée d'un projet : vidéo, contexte, ce que le projet a apporté, liens.
// `item` est déjà traduit dans la langue active (voir loc.js).
export default function ProjectModal({ item, labels, onClose }) {
  const closeBtn = useRef(null)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  if (!item) return null
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button ref={closeBtn} className="modal-x" onClick={onClose} aria-label={labels.close}>
          <Icon name="close" size={20} />
        </button>

        <div className="modal-media">
          {item.video ? (
            <video src={item.video} poster={item.image} controls autoPlay playsInline preload="metadata" />
          ) : (
            <PhotoSlot src={item.image} fit={item.fit} bg={item.bg} pos={item.pos} variant="shot" label={item.title} alt={item.title} />
          )}
        </div>

        <div className="modal-body">
          <div className="modal-badges">
            {item.status && <span className="status-pill static">{item.status}</span>}
            {item.badge && <span className="badge-pill static">{item.badge}</span>}
            {item.type && <span className="modal-type">{item.type}</span>}
          </div>
          <h3>{item.title}</h3>
          {item.tagline && <p className="modal-tag">{item.tagline}</p>}
          {item.summary && <p className="modal-sum">{item.summary}</p>}
          {item.body?.map((p, i) => <p key={i} className="modal-p">{p}</p>)}

          {item.features?.length > 0 && (
            <>
              <p className="mini-label">{labels.features}</p>
              <div className="chips">{item.features.map((f) => <span key={f}>{f}</span>)}</div>
            </>
          )}

          {item.learned?.length > 0 && (
            <>
              <p className="mini-label">{item.learnedLabel}</p>
              <ul className="learned">
                {item.learned.map((l, i) => (
                  <li key={i}>
                    <span className="ln">{String(i + 1).padStart(2, '0')}</span>
                    <div><strong>{l.t}</strong><p>{l.d}</p></div>
                  </li>
                ))}
              </ul>
            </>
          )}

          {item.tags?.length > 0 && (
            <>
              <p className="mini-label">{labels.stack}</p>
              <div className="tags">{item.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </>
          )}

          {item.note && <p className="risk-note">{item.note}</p>}

          {(item.link || item.repo || item.cta) && (
            <div className="modal-actions">
              {item.link && <a className="btn lime sm" href={item.link} target="_blank" rel="noopener noreferrer sponsored"><Icon name="external" size={16} /> {item.linkLabel || labels.live}</a>}
              {item.repo && <a className="btn ghost sm" href={item.repo} target="_blank" rel="noreferrer"><Icon name="github" size={16} /> {labels.code}</a>}
              {item.cta && <a className="btn lime sm" href={item.cta.href} onClick={onClose}>{item.cta.label} <Icon name="arrow" size={16} /></a>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
