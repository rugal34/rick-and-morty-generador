
import React from 'react';
import NavbarComponent from './Components/Navbar';
import MainComponent from './Components/Main';
import FooterComponent from './Components/Footer';
import EpisodeComponent from './Components/episodios';
import CharacterComponent from './Components/Characters';
import CharacterGeneratorComponent from './Components/Generador';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';


function App() {
  
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/" exact element={<MainComponent/>} />
          <Route path="/src/Components/episodios.js" element={<EpisodeComponent/>} />
          <Route path="/src/Components/Characters.js" element={<CharacterComponent/>} />
          <Route path="/src/Components/Generador.js" element={<CharacterGeneratorComponent/>} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;






