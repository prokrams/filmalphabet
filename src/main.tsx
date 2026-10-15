import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './app/app'

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
