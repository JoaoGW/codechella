import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Experiencia from './Pages/Experiencia';
import Mapa from './Pages/Mapa';
import Informacoes from './Pages/Informacoes';
import Ingressos from './Pages/Ingressos';
import Ingresso from './Pages/Ingresso';

export default function AppRouter(){
  return(
    <main>
      <Router>
        <Routes>
          <Route index element={ <HomePage/> } />
          <Route path='experiencia' element={ <Experiencia/> } />
          <Route path='mapa' element={ <Mapa/> } />
          <Route path='informacoes' element={ <Informacoes/> } />
          <Route path='ingressos' element={ <Ingressos/> } />
          <Route path='ingresso' element={ <Ingresso/> } />
        </Routes>
      </Router>
    </main>
  )
}