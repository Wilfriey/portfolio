import { useEffect, useState } from 'react'
import { profile, hero, marquee, manifesto, about, oryvo, support, projects, stack } from './data'
import { ui } from './i18n'
import { L } from './loc'
import { useActiveSection, useCountUp, useInView, useRotate, useScramble } from './hooks'
import Cursor from './components/Cursor'
import Icon from './components/Icon'
import Manifesto from './components/Manifesto'
import NeuralBackground from './components/NeuralBackground'
import PhotoSlot from './components/PhotoSlot'
import JourneySection from './components/JourneySection'
import ProjectModal from './components/ProjectModal'
import ProjectsSection from './components/ProjectsSection'
import Preloader from './components/Preloader'
import Reveal from './components/Reveal'
import Rich from './components/Rich'
import SpotCard from './components/SpotCard'

const projectsLabels = projects.labels
const DOCK = ['top', 'about', 'oryvo', 'support', 'projects', 'stack', 'journey', 'contact']

function Head({ idx, label, title, intro }) {
  return (
    <Reveal className="head">
      <p className="label"><b>{String(idx).padStart(2, '0')}</b><i />{label}</p>
      <h2><Rich text={title} /></h2>
      {intro && <p className="intro">{intro}</p>}
    </Reveal>
  )
}

const statValue = (s) => (s.auto === 'projects' ? projects.items.length : s.value)

function Counter({ value, suffix = '', plain }) {
  const [ref, seen] = useInView()
  const v = useCountUp(value, seen)
  return <strong ref={ref}>{plain ? v : v}{suffix}</strong>
}

function Marquee({ items, reverse, ribbon }) {
  const list = [...items, ...items, ...items, ...items]
  return (
    <div className={`marquee ${reverse ? 'rev' : ''} ${ribbon ? 'ribbon' : ''}`} aria-hidden="true">
      <div className="marquee-track">
        {list.map((w, i) => <span key={i}>{w}<i /></span>)}
      </div>
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'fr')
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [modal, setModal] = useState(null)
  const [pauseSteps, setPauseSteps] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const t = ui[lang]
  const active = useActiveSection(DOCK)
  const { email, phone, whatsapp, linkedin, github, website } = profile.contact

  const kicker = useScramble(hero.kicker[lang])
  const [wi] = useRotate(hero.words[lang].length, 2300)
  const [step, setStep] = useRotate(support.steps.length, 6500, pauseSteps)

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const root = document.documentElement
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      setProgress((root.scrollTop / (root.scrollHeight - root.clientHeight)) * 100)
    }
    const onMove = (e) => {
      root.style.setProperty('--gx', e.clientX + 'px')
      root.style.setProperty('--gy', e.clientY + 'px')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  // Ouvre la fiche (vidéo + détails) : projet ou expérience avec média
  const openProject = (p) => setModal(p)
  const openMedia = (it) => {
    const x = L(it, lang)
    setModal({ title: x.title, tagline: x.org, type: x.period, summary: x.summary, tags: x.tags, image: x.image, video: x.video, link: x.link, linkLabel: x.linkLabel, note: x.note })
  }

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    const subject = encodeURIComponent(`[Portfolio] ${form.type || t.fTypes[0]} — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  const links = [
    email && { k: 'Email', v: email, href: `mailto:${email}` },
    phone && { k: lang === 'fr' ? 'Téléphone' : 'Phone', v: phone, href: `tel:${phone}` },
    whatsapp && { k: 'WhatsApp', v: whatsapp, href: `https://wa.me/${whatsapp.replace(/\D/g, '')}` },
    linkedin && { k: 'LinkedIn', v: linkedin.replace(/^https?:\/\/(www\.)?/, ''), href: linkedin },
    github && { k: 'GitHub', v: github.replace(/^https?:\/\/(www\.)?/, ''), href: github },
    website && { k: 'ORYVO', v: website.replace(/^https?:\/\/(www\.)?/, ''), href: website },
  ].filter(Boolean)

  const cur = support.steps[step]

  return (
    <>
      <Preloader logo={profile.logo} />
      <Cursor />
      <div className="bg" aria-hidden="true">
        <i className="blob b1" /><i className="blob b2" /><i className="blob b3" />
        <NeuralBackground />
        <div className="grid-lines" />
        <div className="spotlight" />
      </div>
      <div className="progress" style={{ width: `${progress}%` }} />

      {/* ============ BARRE DU HAUT ============ */}
      <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#top" className="brand">
          <span className={`logo ${profile.logo ? "img" : ""}`}>{profile.logo ? <img src={profile.logo} alt="" /> : profile.initials}</span>
          <span className="brand-txt"><b>{profile.firstName}</b><small>ORYVO · Founder</small></span>
        </a>
        <div className="top-right">
          <div className="lang" role="group" aria-label="Language">
            <button className={lang === 'fr' ? 'on' : ''} onClick={() => setLang('fr')}>FR</button>
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <a href="#contact" className="btn lime sm">{t.cta}</a>
        </div>
      </header>

      {/* ============ DOCK ============ */}
      <nav className="dock" aria-label="Navigation">
        {DOCK.map((id) => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} aria-label={t.dock[id]}>
            <Icon name={id} size={19} />
            <span>{t.dock[id]}</span>
          </a>
        ))}
      </nav>

      <main>
        {/* ============ HERO ============ */}
        <section id="top" className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="kicker">{kicker}</p>
              <h1>
                <span className="l1">{hero.pre[lang]}</span>
                <span className="rot">
                  {hero.words[lang].map((w, i) => (
                    <em key={w} className={i === wi ? 'cur' : i === (wi + hero.words[lang].length - 1) % hero.words[lang].length ? 'out' : ''}>{w}</em>
                  ))}
                </span>
                <span className="l3">{hero.post[lang]}</span>
              </h1>
              <p className="lead">{hero.text[lang]}</p>
              <div className="cta-row">
                <a href="#oryvo" className="btn lime">{t.ctaOryvo} <Icon name="arrow" size={18} /></a>
                <a href="#projects" className="btn ghost">{t.ctaWork}</a>
              </div>
              <div className="hero-stats">
                {hero.stats.map((s, i) => (
                  <div key={i}>
                    {s.auto ? <Counter value={statValue(s)} suffix={s.suffix} /> : <strong>{s.text}</strong>}
                    <span>{s.label[lang]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <a href="#contact" className="sticker"><i className="live" />{profile.badge[lang]} <Icon name="arrow" size={16} /></a>
              <svg className="ring" viewBox="0 0 400 400" aria-hidden="true">
                <circle cx="200" cy="200" r="190" />
                <circle cx="200" cy="200" r="150" />
              </svg>
              <PhotoSlot src={profile.heroImage} variant="heroimg" label={t.photoHere} hint={t.photoHint} alt={profile.name} />
              {hero.chips.map((c, i) => <span key={c} className={`chip c${i + 1}`}>{c}</span>)}
            </div>
          </div>
          <a href="#about" className="scroll-cue">{t.scroll}</a>
        </section>

        {/* ============ RUBAN INCLINÉ + MARQUEE ============ */}
        <div className="ribbon-band"><Marquee items={marquee.row2[lang]} ribbon reverse /></div>
        <div className="marquees"><Marquee items={marquee.row1} /></div>

        {/* ============ MANIFESTE ============ */}
        <section id="manifeste" className="section manifesto">
          <div className="wrap">
            <Reveal><p className="label"><i />{manifesto.label[lang]}</p></Reveal>
            <Manifesto text={manifesto.text[lang]} />
          </div>
        </section>

        {/* ============ FONDATEUR (bento) ============ */}
        <section id="about" className="section">
          <div className="wrap">
            <Head idx={1} label={about.label[lang]} title={about.title[lang]} />
            <div className="bento">
              <Reveal className="b-photo">
                <SpotCard className="card photo-card" data-cursor="NW">
                  <PhotoSlot src={profile.photo} variant="portrait" label={t.photoHere} hint={t.photoHint} alt={profile.name} />
                  <span className="photo-tag">{about.tag}</span>
                </SpotCard>
              </Reveal>
              <Reveal className="b-bio" delay={80}>
                <SpotCard className="card pad">
                  <h3>{profile.name}</h3>
                  <p className="role">{profile.role[lang]}</p>
                  {about.paragraphs[lang].map((p, i) => <p key={i}>{p}</p>)}
                  <p className="loc"><Icon name="support" size={16} /> {profile.location}</p>
                </SpotCard>
              </Reveal>
              {about.stats.map((s, i) => (
                <Reveal key={i} className={`b-stat s${i + 1}`} delay={120 + i * 70}>
                  <SpotCard className="card pad stat">
                    <Counter value={statValue(s)} suffix={s.suffix} />
                    <span>{s.label[lang]}</span>
                  </SpotCard>
                </Reveal>
              ))}
              <Reveal className="b-values" delay={160}>
                <SpotCard className="card pad">
                  <p className="mini-label">{about.values.label[lang]}</p>
                  <div className="values">
                    {about.values.items.map((v) => (
                      <div key={v.word}><strong>{v.word}</strong><span>{v.text[lang]}</span></div>
                    ))}
                  </div>
                </SpotCard>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ ORYVO ============ */}
        <section id="oryvo" className="section oryvo">
          <div className="wrap">
            <Head idx={2} label={oryvo.label[lang]} title={oryvo.title[lang]} />
            <div className="oryvo-grid">
              <Reveal className="oryvo-main">
                <SpotCard className="card pad big-card">
                  <div className={`oryvo-logo ${profile.oryvoLogo ? "img" : ""}`}>
                    {profile.oryvoLogo ? <img src={profile.oryvoLogo} alt="ORYVO" /> : <span>ORYVO</span>}
                  </div>
                  <p className="big-text">{oryvo.text[lang]}</p>
                  <p className="todo">{oryvo.extra[lang]}</p>
                  {website && <a className="btn lime sm" href={website} target="_blank" rel="noreferrer">{t.visit} <Icon name="arrow" size={16} /></a>}
                </SpotCard>
              </Reveal>
              <div className="pillars">
                {oryvo.pillars.map((p, i) => (
                  <Reveal key={i} delay={i * 90}>
                    <SpotCard className="card pad pillar">
                      <span className="ico"><Icon name={p.icon} size={22} /></span>
                      <div><h4>{p.title[lang]}</h4><p>{p.text[lang]}</p></div>
                    </SpotCard>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="oryvo-stats">
              {oryvo.stats.map((s, i) => (
                <Reveal key={i} delay={i * 80} className="o-stat">
                  {s.plain ? <strong>{s.value}</strong> : <Counter value={statValue(s)} suffix={s.suffix} />}
                  <span>{s.label[lang]}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ACCOMPAGNEMENT ============ */}
        <section id="support" className="section">
          <div className="wrap">
            <Head idx={3} label={support.label[lang]} title={support.title[lang]} intro={support.intro[lang]} />
            <p className="mini-label center">{support.stepsLabel[lang]}</p>
            <div className="method" onMouseEnter={() => setPauseSteps(true)} onMouseLeave={() => setPauseSteps(false)}>
              <ol className="steps">
                {support.steps.map((s, i) => (
                  <li key={i}>
                    <button className={`${step === i ? 'on' : ''} ${i < step ? 'done' : ''}`} onClick={() => setStep(i)}>
                      <span className="n">{String(i + 1).padStart(2, '0')}</span>
                      <span className="tt">{s.title[lang]}</span>
                    </button>
                  </li>
                ))}
              </ol>
              <SpotCard className="card pad panel" key={`${step}-${lang}`}>
                <span className="panel-n">{t.step} {step + 1}/{support.steps.length}</span>
                <h3>{cur.title[lang]}</h3>
                <p>{cur.text[lang]}</p>
                <p className="mini-label">{t.deliverables}</p>
                <ul>{cur.out[lang].map((o) => <li key={o}><Icon name="arrow" size={15} />{o}</li>)}</ul>
                <div className="bar"><i style={{ width: `${((step + 1) / support.steps.length) * 100}%` }} /></div>
              </SpotCard>
            </div>

            <p className="mini-label center spaced">{support.offersLabel[lang]}</p>
            <div className="offers">
              {support.offers.map((o, i) => (
                <Reveal key={i} delay={i * 80}>
                  <SpotCard className="card pad offer">
                    <h4>{o.title[lang]}</h4>
                    <p>{o.text[lang]}</p>
                    <div className="tags">{o.tags.map((tg) => <span key={tg}>{tg}</span>)}</div>
                  </SpotCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROJETS ============ */}
        <section id="projects" className="section">
          <ProjectsSection lang={lang} onOpen={(p) => openProject(p)} />
        </section>

        {/* ============ STACK ============ */}
        <section id="stack" className="section">
          <div className="wrap">
            <Head idx={5} label={stack.label[lang]} title={stack.title[lang]} />
            <div className="stack-grid">
              {stack.groups.map((g, i) => (
                <Reveal key={i} delay={i * 80}>
                  <SpotCard className="card pad stack-card">
                    <h4>{g.name[lang]}</h4>
                    <div className="chips">{g.items.map((it) => <span key={it}>{it}</span>)}</div>
                  </SpotCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PARCOURS ============ */}
        <section id="journey" className="section">
          <JourneySection lang={lang} onMedia={openMedia} />
        </section>

        {/* ============ CV ============ */}
        <section className="cv-band">
          <div className="wrap cv-inner">
            <div><h2><Rich text={t.cvTitle} /></h2><p>{t.cvText}</p></div>
            {profile.cvFile
              ? <a className="btn dark-btn" href={profile.cvFile} download>{t.cvBtn} <Icon name="down" size={18} /></a>
              : <button className="btn dark-btn" onClick={() => window.print()}>{t.cvBtn} <Icon name="down" size={18} /></button>}
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="section">
          <div className="wrap contact-grid">
            <Reveal>
              <p className="label"><b>07</b><i />{t.contactLabel}</p>
              <h2><Rich text={t.contactTitle} /></h2>
              <p className="intro">{t.contactText}</p>
              <div className="links">
                {links.map((l) => (
                  <a key={l.k} href={l.href} target="_blank" rel="noreferrer"><small>{l.k}</small><strong>{l.v}</strong></a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <form className="card pad form" onSubmit={submit}>
                <label>{t.fName}<input required value={form.name} onChange={set('name')} /></label>
                <label>{t.fEmail}<input required type="email" value={form.email} onChange={set('email')} /></label>
                <label>{t.fType}
                  <select value={form.type} onChange={set('type')}>
                    {t.fTypes.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </label>
                <label>{t.fMsg}<textarea required rows="4" value={form.message} onChange={set('message')} /></label>
                <button className="btn lime" type="submit" disabled={!email}>{t.send} <Icon name="arrow" size={18} /></button>
                {!email && <p className="note">{t.noEmail}</p>}
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      {modal && <ProjectModal item={modal} labels={L(projectsLabels, lang)} onClose={() => setModal(null)} />}

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name} · ORYVO — {t.footer}</span>
        <a href="#top">{t.top} ↑</a>
      </footer>
    </>
  )
}
