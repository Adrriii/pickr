import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA4 from 'react-ga4'
import './i18n'
import './index.css'
import App from './App.tsx'

ReactGA4.initialize('G-PZ4KY83TCZ')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
