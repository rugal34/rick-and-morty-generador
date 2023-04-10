

// const Characters = () => {
//   return (
//     <div className="characters">
//       <Container>
//         <Row>
//           <Col>
//             <h1>Personajes</h1>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Characters;

// const Characters = () => {
//   const [personajes, setPersonajes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const obtenerPersonajes = async () => {
//     const respuesta = await axios.get('https://rickandmortyapi.com/api/character');
//     setPersonajes(respuesta.data.results);
//     setLoading(false);
//   }

//   useEffect(() => {
//     obtenerPersonajes();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Cargando personajes...</p>
//       ) : (
//         <ul>
//           {personajes.map((personaje) => (
//             <li key={personaje.id}>{personaje.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import  { useState, useEffect } from 'react';
// import axios from 'axios';

//import React, { useState, useEffect } from 'react';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Container from 'react-bootstrap';
//import Pagination from 'react-bootstrap/Pagination';
//import Cardpersonajes from './Cardpersonajes';

//import React, { useState, useEffect } from 'react';
//import { Row, Col, Pagination } from 'react-bootstrap';
//import { Container } from 'react-bootstrap';
//import PersonajeCard from './PersonajeCard';

// const Characters = () => {
//   const [personajes, setPersonajes] = useState([]);
//   const [paginaActual, setPaginaActual] = useState(1);

//   useEffect(() => {
//     const obtenerPersonajes = async () => {
//       const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}`);
//       const datos = await respuesta.json();
//       setPersonajes(datos.results);
//     };

//     obtenerPersonajes();
//   }, [paginaActual]);

//   const handlePaginaClick = (numeroPagina) => {
//     setPaginaActual(numeroPagina);
//   };

//   return (
//     <Container>
//       <Row>
//         {personajes.map((personaje) => (
//           <Col key={personaje.id} xs={12} sm={6} md={4} lg={3}>
//             <Cardpersonajes
//               nombre={personaje.name}
//               foto={personaje.image}
//               genero={personaje.gender}
//               ubicacion={personaje.location.name}
//               origen={personaje.origin.name}
//               especie={personaje.species}
//               estado={personaje.status}
//             />
//           </Col>
//         ))}
//       </Row>
//       <Row>
//         <Col>
//           <Pagination>
//             <Pagination.Prev onClick={() => handlePaginaClick(paginaActual - 1)} />
//             <Pagination.Item active>{paginaActual}</Pagination.Item>
//             <Pagination.Next onClick={() => handlePaginaClick(paginaActual + 1)} />
//           </Pagination>
//         </Col>
//       </Row>
//     </Container>
//   );
// };


// export default Characters;

// import React, { useState, useEffect } from 'react';
// import { Row, Col, Pagination, Container, Card } from 'react-bootstrap';
// import Cardpersonajes from './Cardpersonajes';

// const Characters = () => {
//   const [personajes, setPersonajes] = useState([]);
//   const [paginaActual, setPaginaActual] = useState(1);

//   useEffect(() => {
//     const obtenerPersonajes = async () => {
//       const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}`);
//       const datos = await respuesta.json();
//       setPersonajes(datos.results);
//     };

//     obtenerPersonajes();
//   }, [paginaActual]);

//   const handlePaginaClick = (numeroPagina) => {
//     setPaginaActual(numeroPagina);
//   };

//   return (
//     <div className="container-fluid">
//       <Row>
//         <Col>
//           <Container>
//             {personajes.map((personaje) => (
//               <Card key={personaje.id} className="bg-light mb-3">
//                 <Cardpersonajes
//                   nombre={personaje.name}
//                   foto={personaje.image}
//                   genero={personaje.gender}
//                   ubicacion={personaje.location.name}
//                   origen={personaje.origin.name}
//                   especie={personaje.species}
//                   estado={personaje.status}
//                 />
//               </Card>
//             ))}
//           </Container>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col>
//           <Pagination>
//             <Pagination.Prev onClick={() => handlePaginaClick(paginaActual - 1)} />
//             <Pagination.Item active>{paginaActual}</Pagination.Item>
//             <Pagination.Next onClick={() => handlePaginaClick(paginaActual + 1)} />
//           </Pagination>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Characters;


import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination, Container, Card } from 'react-bootstrap';
import Cardpersonajes from './Cardpersonajes';
import './Characters.css';

const Characters = () => {
  const [personajes, setPersonajes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}`);
      const datos = await respuesta.json();
      setPersonajes(datos.results);
    };

    obtenerPersonajes();
  }, [paginaActual]);

  const handlePaginaClick = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  return (
    <div className="container-fluid">
      <Row>
        {personajes.map((personaje) => (
          <Col key={personaje.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="bg-rickandmorty mb-3">
              <Cardpersonajes
                nombre={personaje.name}
                foto={personaje.image}
                genero={personaje.gender}
                ubicacion={personaje.location.name}
                origen={personaje.origin.name}
                especie={personaje.species}
                estado={personaje.status}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col>
          <Pagination>
            <Pagination.Prev onClick={() => handlePaginaClick(paginaActual - 1)} />
            <Pagination.Item active>{paginaActual}</Pagination.Item>
            <Pagination.Next onClick={() => handlePaginaClick(paginaActual + 1)} />
          </Pagination>
        </Col>
      </Row>
    </div>
  );
};

export default Characters;