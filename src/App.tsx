import { useState, useEffect } from 'react'
import ReactGA4 from 'react-ga4'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Sidebar, Mode } from './components/Sidebar'
import { MetaTags } from './components/MetaTags'
import ListMode from './modes/list/ListMode'
import NumbersMode from './modes/numbers/NumbersMode'
import './App.css'

function App() {
  const [mode, setMode] = useState<Mode>('list')

  useEffect(() => {
    ReactGA4.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    ReactGA4.event({
      category: "Mode Selection",
      action: "Change Mode",
      label: newMode
    });
  };

  return (
    <div className="app-layout">
      <MetaTags mode={mode} />
      <nav aria-label="Main navigation">
        <Sidebar currentMode={mode} onModeChange={handleModeChange} />
      </nav>
      <main className="container">
        <Header />
        <article>
          {mode === 'list' ? (
            <section aria-label="List Mode">
              <ListMode />
            </section>
          ) : (
            <section aria-label="Numbers Mode">
              <NumbersMode />
            </section>
          )}
        </article>
        <Footer />
      </main>
    </div>
  )
}

export default App
