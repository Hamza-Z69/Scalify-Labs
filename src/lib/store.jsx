import React, { createContext, useContext, useEffect, useState } from 'react'
import { CONTENT } from '../content.js'

const Ctx = createContext(null)

export function StoreProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('lang', lang)
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()
    const tc = document.querySelector('meta[name="theme-color"]')
    if (tc && bg) tc.setAttribute('content', bg)
  }, [theme, lang])

  const t = CONTENT[lang]
  const value = { lang, setLang, theme, setTheme, t }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useStore = () => useContext(Ctx)
