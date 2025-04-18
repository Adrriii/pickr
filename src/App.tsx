import { useState, useEffect } from 'react'
import ReactGA4 from 'react-ga4'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Sidebar, Mode } from './components/Sidebar'
import { ListMode } from './modes/list/ListMode'
import { NumbersMode } from './modes/numbers/NumbersMode'
import './App.css'

function App() {
  const [mode, setMode] = useState<Mode>('list')

  useEffect(() => {
    // Send pageview on initial load
    ReactGA4.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    // Track mode changes as events
    ReactGA4.event({
      category: "Mode Selection",
      action: "Change Mode",
      label: newMode
    });
  };

  return (
    <div className="app-layout">
      <Sidebar currentMode={mode} onModeChange={handleModeChange} />
      <div className="container">
        <Header />
        {mode === 'list' ? <ListMode /> : <NumbersMode />}
        <Footer />
      </div>
    </div>
  )
}

export default App
