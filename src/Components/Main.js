// import React from 'react';
// import { Button } from 'react-bootstrap';
// import rickAndMortyBackground from '../assets/tv-rick-sanchez-morty-smith-rick-and-morty-wallpaper-preview.jpg';

// const MainComponent = () => {
//   const styles = {
//     backgroundImage: `url(${rickAndMortyBackground})`,
//     backgroundSize: 'cover',
//     height: '100vh',
//   };

//   return (
//     <main style={styles}>
//       <div className="d-flex justify-content-center align-items-center h-100">
//         <Button variant="primary" href="#character-generator">
//           Generador de Personajes
//         </Button>
//       </div>
//     </main>
//   );
// };

// export default MainComponent;
// import React from 'react';
// import { Button } from 'react-bootstrap';
// import bgImage from '../assets/rick-and-morty-god-s-dimension-wallpaper-1440x960_37.jpg';

// const MainComponent = () => {
//   const buttonStyle = {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     textAlign: 'center'
//   };

//   return (
//     <main style={{ backgroundImage: `url(${bgImage})`, height: '100vh' }}>
//       <div className="d-flex align-items-end justify-content-center" style={buttonStyle}>
//         <Button variant="success" className="btn-lg mb-3">Generar de Personajes</Button>
//       </div>
//     </main>
//   );
// };

// export default MainComponent;
import React from 'react';
import { Button } from 'react-bootstrap';
import bgImage from '../assets/rick-and-morty-god-s-dimension-wallpaper-1440x960_37.jpg';
import { useNavigate } from 'react-router-dom';

const MainComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/src/Components/Generador.js');
  };

  const buttonStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center'
  };

  return (
    <main style={{ backgroundImage: `url(${bgImage})`, height: '100vh' }}>
      <div className="d-flex align-items-end justify-content-center" style={buttonStyle}>
        <Button variant="success" className="btn-lg mb-3" onClick={handleClick}>Generar de Personajes</Button>
      </div>
    </main>
  );
};

export default MainComponent;