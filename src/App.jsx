import React, { useEffect, useState } from 'react'
import { StoreProvider } from './lib/store.jsx'
import { initSmoothScroll } from './lib/smooth.js'
import Cursor from './components/Cursor.jsx'
import Loader from './components/Loader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import HeroTunnel from './components/HeroTunnel.jsx'
import Intro from './components/Intro.jsx'
import Proof from './components/Proof.jsx'
import Clients from './components/Clients.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Method from './components/Method.jsx'
import Sectors from './components/Sectors.jsx'
import Footer from './components/Footer.jsx'
import Mascot from './components/Mascot.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { initSmoothScroll() }, [])

  return (
    <StoreProvider>
      <Cursor />
      <div className="grain" />
      <Loader onDone={() => setLoaded(true)} />
      <Nav />
      <main>
        <HeroTunnel start={loaded} />
        <Intro />
        <Work />
        <Proof />
        <Clients />
        <Services />
        <Method />
        <Sectors />
      </main>
      <Footer />
      <Mascot />
    </StoreProvider>
  )
}
