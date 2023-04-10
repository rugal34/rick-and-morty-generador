import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import './Generador.css';

const Generador = () => {
  const [personajes, setPersonajes] = useState([]);

  const generarPersonaje = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/');
      const personaje = response.data.results[Math.floor(Math.random() * response.data.results.length)];
      personaje.isNew = true;
      setPersonajes([personaje, ...personajes]);
    } catch (error) {
      console.error(error);
    }
  };

  const limpiarPersonajes = () => {
    setPersonajes([]);
  };

  const nuevosPersonajes = personajes.filter((p) => p.isNew);
  const otrosPersonajes = personajes.filter((p) => !p.isNew);

  return (
    <Container className="d-flex flex-column align-items-center page-container">
      <h1 className="text-center mb-4">Generador de Personajes</h1>
      <Button variant="info" className="mb-3" onClick={generarPersonaje}>
        Generar Personaje
      </Button>
      <Button variant="danger" className="mb-3" onClick={limpiarPersonajes}>
        Limpiar
      </Button>
      <div className="personajes-list-container">
        {nuevosPersonajes.map((personaje, index) => (
          <div key={index} className="personaje-card is-new">
            <img src={personaje.image} alt={personaje.name} className="personaje-img" />
            <div className="personaje-info">
              <h2>{personaje.name}</h2>
              <p className="mb-1">
                <strong>Status:</strong> {personaje.status}
              </p>
              <p className="mb-1">
                <strong>Especie:</strong> {personaje.species}
              </p>
              <p className="mb-1">
                <strong>Género:</strong> {personaje.gender}
              </p>
              <p>
                <strong>Origen:</strong> {personaje.origin.name}
              </p>
            </div>
          </div>
        ))}
        <div className="personajes-row">
          {otrosPersonajes.map((personaje, index) => (
            <div key={index} className="personaje-card">
              <img src={personaje.image} alt={personaje.name} className="personaje-img" />
              <div className="personaje-info">
                <h2>{personaje.name}</h2>
                <p className="mb-1">
                  <strong>Status:</strong> {personaje.status}
                </p>
                <p className="mb-1">
                  <strong>Especie:</strong> {personaje.species}
                </p>
                <p className="mb-1">
                  <strong>Género:</strong> {personaje.gender}
                </p>
                <p>
                  <strong>Origen:</strong> {personaje.origin.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="text-center mt-auto py-3">
        <p>
          Desarrollado por <a href="https://www.linkedin.com/in/juan-manuel-rubio-gallego/">Juan Manuel Rubio Gallego</a> &copy; 2023
        </p>
      </footer>
    </Container>
  );
};

export default Generador


// import React, { useState } from 'react';
// import { Container, Button } from 'react-bootstrap';
// import axios from 'axios';
// import './Generador.css';

// const Generador = () => {
//   const [personajes, setPersonajes] = useState([]);

//   const generarPersonaje = async () => {
//     try {
//       const response = await axios.get('https://rickandmortyapi.com/api/character/');
//       const personaje = response.data.results[Math.floor(Math.random() * response.data.results.length)];
//       personaje.isNew = true;
//       setPersonajes([personaje, ...personajes]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const limpiarPersonajes = () => {
//     setPersonajes([]);
//   };

//   const nuevosPersonajes = personajes.filter((p) => p.isNew);
//   const otrosPersonajes = personajes.filter((p) => !p.isNew);

//   return (
//     <Container className="d-flex flex-column align-items-center vh-100">
//       <h1 className="text-center mb-4">Generador de Personajes</h1>
//       <Button variant="info" className="mb-3" onClick={generarPersonaje}>
//         Generar Personaje
//       </Button>
//       <Button variant="danger" className="mb-3" onClick={limpiarPersonajes}>
//         Limpiar
//       </Button>
//       <div className="personajes-list-container">
//         {nuevosPersonajes.map((personaje, index) => (
//           <div key={index} className="personaje-card is-new">
//             <img src={personaje.image} alt={personaje.name} className="personaje-img" />
//             <div className="personaje-info">
//               <h2>{personaje.name}</h2>
//               <p className="mb-1">
//                 <strong>Status:</strong> {personaje.status}
//               </p>
//               <p className="mb-1">
//                 <strong>Especie:</strong> {personaje.species}
//               </p>
//               <p className="mb-1">
//                 <strong>Género:</strong> {personaje.gender}
//               </p>
//               <p>
//                 <strong>Origen:</strong> {personaje.origin.name}
//               </p>
//             </div>
//           </div>
//         ))}
//         <div className="personajes-row">
//           {otrosPersonajes.map((personaje, index) => (
//             <div key={index} className="personaje-card">
//               <img src={personaje.image} alt={personaje.name} className="personaje-img" />
//               <div className="personaje-info">
//                 <h2>{personaje.name}</h2>
//                 <p className="mb-1">
//                   <strong>Status:</strong> {personaje.status}
//                 </p>
//                 <p className="mb-1">
//                   <strong>Especie:</strong> {personaje.species}
//                 </p>
//                 <p className="mb-1">
//                   <strong>Género:</strong> {personaje.gender}
//                 </p>
//                 <p>
//                   <strong>Origen:</strong> {personaje.origin.name}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Generador;

// import React, { useState } from 'react';
// import { Container, Button } from 'react-bootstrap';
// import axios from 'axios';
// import './Generador.css';

// const Generador = () => {
//   const [personajes, setPersonajes] = useState([]);

//   const generarPersonaje = async () => {
//     try {
//       const response = await axios.get('https://rickandmortyapi.com/api/character/');
//       const personaje = response.data.results[Math.floor(Math.random() * response.data.results.length)];
//       personaje.isNew = true; // Agregamos una propiedad isNew al personaje generado
//       setPersonajes([...personajes, personaje]);

//       // Verificar si el personaje ya existe en la lista
//       const personajeExistente = personajes.some((p) => p.id === personaje.id);
//       if (!personajeExistente) {
//         setPersonajes([...personajes, personaje]);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const limpiarPersonajes = () => {
//     setPersonajes([]);
//   };
//   const nuevosPersonajes = personajes.filter((p) => p.isNew);
//   const otrosPersonajes = personajes.filter((p) => !p.isNew);

//   return (
//     <div className="page-container">
//       <Container className="d-flex flex-column align-items-center vh-100">
//         <h1 className="text-center mb-4">Generador de Personajes</h1>
//         <Button variant="info" className="mb-3" onClick={generarPersonaje}>
//           Generar Personaje
//         </Button>
//         <Button variant="danger" className="mb-3" onClick={limpiarPersonajes}>
//           Limpiar
//         </Button>
//         <div className="personajes-list-container d-flex flex-wrap justify-content-center">
//           {personajes.map((personaje, index) => (
//             <div key={index} className="personaje-card">
//               <img src={personaje.image} alt={personaje.name} className="personaje-img" />
//               <div className="personaje-info">
//                 <h2>{personaje.name}</h2>
//                 <p className="mb-1">
//                   <strong>Status:</strong> {personaje.status}
//                 </p>
//                 <p className="mb-1">
//                   <strong>Especie:</strong> {personaje.species}
//                 </p>
//                 <p className="mb-1">
//                   <strong>Género:</strong> {personaje.gender}
//                 </p>
//                 <p>
//                   <strong>Origen:</strong> {personaje.origin.name}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Generador;


// import React, { useState } from 'react';
// import { Container, Button } from 'react-bootstrap';
// import axios from 'axios';
// import './Generador.css';

// const Generador = () => {
//   const [personajes, setPersonajes] = useState([]);

//   const generarPersonaje = async () => {
//     try {
//       const response = await axios.get('https://rickandmortyapi.com/api/character/');
//       const personaje = response.data.results[Math.floor(Math.random() * response.data.results.length)];
//       setPersonajes([...personajes, personaje]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const limpiarPersonajes = () => {
//     setPersonajes([]);
//   };

//   return (
//     <Container className="d-flex flex-column align-items-center vh-100">
//       <h1 className="text-center mb-4">Generador de Personajes</h1>
//       <Button variant="info" className="mb-3" onClick={generarPersonaje}>
//         Generar Personaje
//       </Button>
//       <Button variant="danger" className="mb-3" onClick={limpiarPersonajes}>
//         Limpiar
//       </Button>
//       <div className="personajes-list-container d-flex flex-wrap justify-content-center">
//         {personajes.map((personaje) => (
//           <div key={personaje.id} className="personaje-card">
//             <img src={personaje.image} alt={personaje.name} className="personaje-img" />
//             <div className="personaje-info">
//               <h2>{personaje.name}</h2>
//               <p className="mb-1">
//                 <strong>Status:</strong> {personaje.status}
//               </p>
//               <p className="mb-1">
//                 <strong>Especie:</strong> {personaje.species}
//               </p>
//               <p className="mb-1">
//                 <strong>Género:</strong> {personaje.gender}
//               </p>
//               <p>
//                 <strong>Origen:</strong> {personaje.origin.name}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={{ marginTop: '50px' }}>Este es el footer</div>
//     </Container>
//   );
// };

// export default Generador;


// import React from 'react';
// import { Container, Button } from 'react-bootstrap';
// //import { useNavigate } from 'react-router-dom';
// //import { useHistory } from 'react-router-dom';

// const Generador = () => {
//   //const navigation = useNavigate();

//   //const handleClick = () => {
//    // navigation.push ('/src/Components/Generador.js');
  

//   return (
//     <Container className="d-flex flex-column justify-content-end align-items-center" style={{ height: '100vh' }}>
//       <Button variant="info"  className="mt-auto">
//         Generador de Personajes
//       </Button>
//     </Container>
//   );
// };

// export default Generador;

// import React, { useState } from 'react';
// import { Container, Button } from 'react-bootstrap';
// import axios from 'axios';

// const Generador = () => {
//   const [personajes, setPersonajes] = useState([]);

//   const generarPersonaje = async () => {
//     try {
//       const response = await axios.get('https://rickandmortyapi.com/api/character/');
//       const personaje = response.data.results[Math.floor(Math.random() * response.data.results.length)];
//       setPersonajes([...personajes, personaje]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const limpiarPersonajes = () => {
//     setPersonajes([]);
//   };

//   return (
//     <Container className="d-flex flex-column justify-content-end align-items-center" style={{ height: '100vh' }}>
//       <Button variant="info" className="mt-auto" onClick={generarPersonaje}>
//         Generar Personaje
//       </Button>
//       <Button variant="danger" className="mt-3" onClick={limpiarPersonajes}>
//         Limpiar
//       </Button>
//       {personajes.length > 0 && (
//         <ul className="mt-3">
//           {personajes.map((personaje) => (
//             <li key={personaje.id}>
//               <img src={personaje.image} alt={personaje.name} />
//               <p>{personaje.name}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </Container>
//   );
// };

// export default Generador;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';

// const Generador = () => {
//   const [personajes, setPersonajes] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const generarPersonaje = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get('https://rickandmortyapi.com/api/character/');
//       const personaje = response.data.results[Math.floor(Math.random() * response.data.results.length)];
//       setPersonajes([...personajes, personaje]);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const limpiarPersonajes = () => {
//     setPersonajes([]);
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = '#E5A841';
//     return () => {
//       document.body.style.backgroundColor = 'white';
//     };
//   }, []);

//   const style = {
//     borderRadius: '10px',
//     marginBottom: '10px',
//     backgroundColor: '#6699CC',
//     color: '#fff',
//     borderColor: '#6699CC',
//     fontWeight: 'bold',
//     cursor: 'pointer'
//   };

//   return (
//     <Container fluid className="d-flex flex-column justify-content-end align-items-center" style={{ height: '100vh' }}>
//       <Row>
//         <Col md={{ span: 4, offset: 4 }} className="text-center">
//           <Button variant="primary" style={style} className="mt-auto" onClick={generarPersonaje} disabled={loading}>
//             {loading && <Spinner animation="border" size="sm" className="mr-2" />}
//             {loading ? 'Generando...' : 'Generar Personaje'}
//           </Button>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={{ span: 4, offset: 4 }} className="text-center">
//           <Button variant="danger" style={style} className="mt-3" onClick={limpiarPersonajes}>
//             Limpiar
//           </Button>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={{ span: 8, offset: 2 }} className="text-center">
//           {personajes.length > 0 && (
//             <ul className="mt-3">
//               {personajes.map((personaje) => (
//                 <li key={personaje.id}>
//                   <img src={personaje.image} alt={personaje.name} />
//                   <p>{personaje.name}</p>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Generador;

// import React, { useState } from 'react';
// import { Container, Button } from 'react-bootstrap';
// import axios from 'axios';
// import './Generador.css';

// const Generador = () => {
//   const [personajes, setPersonajes] = useState([]);

//   const generarPersonaje = async () => {
//     try {
//       const response = await axios.get('https://rickandmortyapi.com/api/character/');
//       const personaje = response.data.results[Math.floor(Math.random() * response.data.results.length)];
//       setPersonajes([...personajes, personaje]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const limpiarPersonajes = () => {
//     setPersonajes([]);
//   };

//   return (
//     <Container className="d-flex flex-column align-items-center vh-100">
//       <h1 className="text-center mb-4">Generador de Personajes</h1>
//       <Button variant="info" className="mb-3" onClick={generarPersonaje}>
//         Generar Personaje
//       </Button>
//       <Button variant="danger" className="mb-3" onClick={limpiarPersonajes}>
//         Limpiar
//       </Button>
//       <div className="personajes-list-container">
//         {personajes.map((personaje, index) => (
//           <div key={index} className="personaje-card">
//             <img src={personaje.image} alt={personaje.name} className="personaje-img" />
//             <div className="personaje-info">
//               <h2>{personaje.name}</h2>
//               <p className="mb-1">
//                 <strong>Status:</strong> {personaje.status}
//               </p>
//               <p className="mb-1">
//                 <strong>Especie:</strong> {personaje.species}
//               </p>
//               <p className="mb-1">
//                 <strong>Género:</strong> {personaje.gender}
//               </p>
//               <p>
//                 <strong>Origen:</strong> {personaje.origin.name}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Generador;

// import React, { useState } from 'react';
// import { Container, Button } from 'react-bootstrap';
// import axios from 'axios';
// import './Generador.css';

// const Generador = () => {
//   const [personajes, setPersonajes] = useState([]);

//   const generarPersonaje = async () => {
//     try {
//       const response = await axios.get('https://rickandmortyapi.com/api/character/');
//       const personaje = response.data.results[Math.floor(Math.random() * response.data.results.length)];
//       setPersonajes([...personajes, personaje]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const limpiarPersonajes = () => {
//     setPersonajes([]);
//   };

//   return (
//     <Container className="d-flex flex-column align-items-center vh-100">
//       <h1 className="text-center mb-4">Generador de Personajes</h1>
//       <Button variant="info" className="mb-3" onClick={generarPersonaje}>
//         Generar Personaje
//       </Button>
//       <Button variant="danger" className="mb-3" onClick={limpiarPersonajes}>
//         Limpiar
//       </Button>
//       <div className="personajes-list-container row mb-5">
//         {personajes.map((personaje, index) => (
//           <div key={index} className="col-md-4 mb-3">
//             <div className="personaje-card">
//               <img src={personaje.image} alt={personaje.name} className="personaje-img" />
//               <div className="personaje-info">
//                 <h2>{personaje.name}</h2>
//                 <p className="mb-1">
//                   <strong>Status:</strong> {personaje.status}
//                 </p>
//                 <p className="mb-1">
//                   <strong>Especie:</strong> {personaje.species}
//                 </p>
//                 <p className="mb-1">
//                   <strong>Género:</strong> {personaje.gender}
//                 </p>
//                 <p>
//                   <strong>Origen:</strong> {personaje.origin.name}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Generador;