import React, { useEffect, useState } from 'react'
import { useStore } from '../lib/store.jsx'
import GridCanvas from '../webgl/GridCanvas.jsx'
import { getLenis } from '../lib/smooth.js'
import './Footer.css'

// Clé d'accès Web3Forms (obtenue sur web3forms.com avec l'email destinataire)
const WEB3FORMS_KEY = 'b5e15c75-4079-48af-ba41-c8c60d06c4d4'

export default function Footer() {
  const { t, lang, setLang } = useStore()
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ firstname: '', name: '', company: '', email: '', phone: '', message: '' })
  const on = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const F = t.contact.fields

  const submit = async (e) => {
    e.preventDefault()
    setSending(true); setError('')
    try {
      const fd = new FormData()
      fd.append('access_key', WEB3FORMS_KEY)
      fd.append('subject', `Nouveau lead Scalify — ${form.company || `${form.firstname} ${form.name}`}`)
      fd.append('from_name', 'Scalify Labs')
      fd.append('Prénom', form.firstname)
      fd.append('Nom', form.name)
      fd.append('Entreprise', form.company)
      fd.append('email', form.email)
      fd.append('Téléphone', form.phone)
      fd.append('Message', form.message)
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.success) { setSent(true); window.dispatchEvent(new Event('scalify:sent')) }
      else setError(lang === 'en' ? "Couldn't send — please retry." : "Envoi impossible — réessaie.")
    } catch (_) {
      setError(lang === 'en' ? "Couldn't send — please retry." : "Envoi impossible — réessaie.")
    } finally { setSending(false) }
  }

  useEffect(() => {
    const lenis = getLenis()
    if (open) lenis?.stop(); else lenis?.start()
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <footer id="contact" className="end">
      <GridCanvas />

      <div className="end__center">
        <div className="end__kicker">{t.contact.kicker}</div>
        <h2 className="end__title">{t.contact.title}</h2>
        <button className="end__go" onClick={() => setOpen(true)} data-cursor="Ouvrir">
          <span className="end__go-word">{t.end.go}</span>
          <span className="end__go-arrow">↗</span>
        </button>
        <ul className="end__bullets">
          {t.contact.bullets.map((bl) => <li key={bl}>{bl}</li>)}
        </ul>
      </div>

      <div className={`end__modal ${open ? 'is-open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}>
        <div className="end__panel">
          <button className="end__close" onClick={() => setOpen(false)} aria-label="Fermer" data-cursor>✕</button>
          {sent ? (
            <div className="end__sent">
              <span className="end__big" data-text={t.contact.sentTitle}>{t.contact.sentTitle}</span>
              <p>{t.contact.sentBody}</p>
            </div>
          ) : (
            <form className="end__form" onSubmit={submit}>
              <div className="end__row2">
                <label className="efield"><span>{F.firstname}</span><input required value={form.firstname} onChange={on('firstname')} /></label>
                <label className="efield"><span>{F.name}</span><input required value={form.name} onChange={on('name')} /></label>
              </div>
              <label className="efield"><span>{F.company}</span><input value={form.company} onChange={on('company')} /></label>
              <div className="end__row2">
                <label className="efield"><span>{F.email}</span><input required type="email" value={form.email} onChange={on('email')} /></label>
                <label className="efield"><span>{F.phone}</span><input required type="tel" value={form.phone} onChange={on('phone')} /></label>
              </div>
              <label className="efield"><span>{F.message}</span><textarea rows={2} value={form.message} onChange={on('message')} /></label>
              {error && <div className="end__error">{error}</div>}
              <button type="submit" className="end__submit" data-cursor disabled={sending}>
                {sending ? (lang === 'en' ? 'Sending…' : 'Envoi…') : <>{t.contact.submit} <span>↗</span></>}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="end__bar">
        <div className="end__barleft">
          <span className="end__copy">{t.footer.copy}</span>
          <nav className="end__legal">
            <a href="/mentions-legales">{lang === 'en' ? 'Legal notice' : 'Mentions légales'}</a>
            <a href="/confidentialite">{lang === 'en' ? 'Privacy' : 'Confidentialité'}</a>
          </nav>
        </div>
        <span className="end__logo-chip"><img className="end__logo" src="/logo-scalify.png" alt="Scalify Labs" /></span>
        <div className="end__lang">
          {['fr', 'en'].map((l) => (
            <button key={l} className={lang === l ? 'is-active' : ''} onClick={() => setLang(l)}>{l}</button>
          ))}
        </div>
      </div>
    </footer>
  )
}
