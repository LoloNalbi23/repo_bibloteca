import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"
import Libros_ficcion from './Libros_ficcion'
import Libros_no_ficcion from './Libros_no_ficcion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="libros/ficcion" element={<Libros_ficcion />} />
          <Route path="libros/no-ficcion" element={<Libros_no_ficcion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
