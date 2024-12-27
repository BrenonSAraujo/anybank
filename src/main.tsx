import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalStyle } from './components/GlobalStyle/index.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
)
