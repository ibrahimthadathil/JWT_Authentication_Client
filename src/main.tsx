import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.tsx'
import './index.css'
import { Toaster } from 'sonner'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors position='top-center'/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
