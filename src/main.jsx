
// Este es el archivo principal de la aplicacion de REACT

// React es una libreria ligera
import React from 'react'

// react-dom es una libreria de renderizado(Permite integrar React con el DOM-HTML)
import ReactDOM from 'react-dom/client'

// Estas importaciones se inyectaran en el archivo index.html
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* App es el componente principal */}
  </React.StrictMode>,
)
