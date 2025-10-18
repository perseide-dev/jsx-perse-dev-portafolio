import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingTemplate from './components/templates/LandingTemplate'
import { Helmet } from "react-helmet"

function App() {
  return (
    <>
      <Helmet>
        <title>Perseide.dev | Portafolio</title>
        <meta name="description" content="Portafolio de Miguel Vasquez Giraldo, desarrollador web en Medellín." />
        <meta name="keywords" content="desarrollador web, Medellín, portafolio, frontend, react, diseño web, Colombia, software, UI, UX, proyectos, tecnología" />
        <meta name="author" content="Miguel Vasquez Giraldo" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Perseide.dev | Portafolio" />
        <meta property="og:description" content="Desarrollador web en Medellín. Portafolio de Miguel Vasquez Giraldo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.perseide.dev/" />
        <meta property="og:image" content="/public/brand.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Perseide.dev | Portafolio" />
        <meta name="twitter:description" content="Desarrollador web en Medellín. Portafolio de Miguel Vasquez Giraldo." />
        <meta name="twitter:image" content="/public/brand.svg" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            name="Home"
            element={
              <LandingTemplate />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App