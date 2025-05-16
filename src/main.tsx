import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Heading } from './components/Heading.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Heading/>
    <App/>
  </StrictMode>
)
