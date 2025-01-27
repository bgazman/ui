import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@styles/global.css'
import '@styles/root-theme.css'
import '@styles/components-styles.css'
import '@styles/layout-styles.css';


import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
