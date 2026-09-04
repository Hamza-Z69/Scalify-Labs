import React, { useState } from 'react'
import { useStore } from '../lib/store.jsx'
import { useReveal, useMagnetic } from '../lib/anim.js'
import './Contact.css'

export default function Contact() {
  const { t } = useStore()
  const ref = useReveal({ y: 30, stagger: 0.08 })
  const [form, setForm] = useState({ firstname: '', name: '', company: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const btn = useMagnetic(0.25)
  const on = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const F = t.contact.fields

  return (
    <section id="contact" className="section section--cream contact" ref={ref}>
      <div className="wrap contact__grid">
        <div className="contact__l">
          <div className="kicker" data-reveal>{t.contact.kicker}</div>
          <h2 className="contact__title display" data-reveal>{t.contact.title}</h2>
          <p className="contact__sub" data-reveal>{t.contact.sub}</p>
          <ul className="contact__bullets" data-reveal>
            {t.contact.bullets.map((b) => (
              <li key={b}>
                <span className="contact__check">
                  <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2.5 6.2 L5 8.5 L9.5 3.5" stroke="var(--accent)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="contact__r" data-reveal>
          {sent ? (
            <div className="contact__sent">
              <div className="contact__sent-t display">{t.contact.sentTitle}, <em className="serif-italic accent">{form.firstname || '—'}</em>.</div>
              <p>{t.contact.sentBody}</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <div className="contact__row2">
                <label className="field"><span>{F.firstname}</span><input required value={form.firstname} onChange={on('firstname')} /></label>
                <label className="field"><span>{F.name}</span><input required value={form.name} onChange={on('name')} /></label>
              </div>
              <label className="field"><span>{F.company}</span><input value={form.company} onChange={on('company')} /></label>
              <label className="field"><span>{F.email}</span><input required type="email" value={form.email} onChange={on('email')} /></label>
              <label className="field"><span>{F.phone}</span><input required type="tel" value={form.phone} onChange={on('phone')} /></label>
              <label className="field"><span>{F.message}</span><textarea rows={3} value={form.message} onChange={on('message')} /></label>
              <button ref={btn} type="submit" className="btn btn--primary contact__submit" data-cursor>
                {t.contact.submit} <span className="btn__arrow">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
