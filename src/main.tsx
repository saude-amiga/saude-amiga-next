import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import Contraste from './routes/Contraste/index.tsx'
import Texto from './routes/Texto/index.tsx'
import Leitor from './routes/Leitor/index.tsx'
import Libras from './routes/Libras/index.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { applyUserTextSettings } from './utils/applyUserTextSettings.ts'
import Guias from './routes/Guias/index.tsx'

applyUserTextSettings();

const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/>, children:[
    {path:"/", element:<Home/>},
    {path:"/contraste", element:<Contraste/>},
    {path:"/texto", element:<Texto/>},
    {path:"/leitor", element:<Leitor/>},
    {path:"/libras", element:<Libras/>},
    {path:"/guias", element:<Guias/>}
  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)