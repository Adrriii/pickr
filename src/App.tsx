import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Sidebar, Mode } from './components/Sidebar'
import { ListMode } from './modes/list/ListMode'
import { NumbersMode } from './modes/numbers/NumbersMode'
import './App.css'

function App() {
  const [mode, setMode] = useState<Mode>('list')

  return (
    <div className="app-layout">
      <Sidebar currentMode={mode} onModeChange={setMode} />
      <div className="container">
        <Header />
        {mode === 'list' ? <ListMode /> : <NumbersMode />}
        <Footer />
      </div>
    </div>
  )
}

export default App
