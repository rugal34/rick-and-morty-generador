import React from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
//import  { useState, useEffect } from 'react';
//import axios from 'axios';



// const Episodes = () => {
//   return (
//     <div className="episodes">
//       <Container>
//         <Row>
//           <Col>
//             <h1>Episodios</h1>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Episodes;

// const Episodes = () => {
//   const [episodios, setEpisodios] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const obtenerEpisodios = async () => {
//     const respuesta = await axios.get('https://rickandmortyapi.com/api/episode');
//     setEpisodios(respuesta.data.results);
//     setLoading(false);
//   }

//   useEffect(() => {
//     obtenerEpisodios();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Cargando episodios...</p>
//       ) : (
//         <ul>
//           {episodios.map((episodio) => (
//             <li key={episodio.id}>{episodio.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Episodes;

// import { useState, useEffect } from 'react';
// import { Row, Col, Container, Card } from 'react-bootstrap';
// import axios from 'axios';

// const Episodes = () => {
//   const [episodios, setEpisodios] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const obtenerEpisodios = async () => {
//     const respuesta = await axios.get('https://rickandmortyapi.com/api/episode');
//     setEpisodios(respuesta.data.results);
//     setLoading(false);
//   };

//   useEffect(() => {
//     obtenerEpisodios();
//   }, []);

//   return (
//     <div className="container-fluid">
//       <Row>
//         {loading ? (
//           <p>Cargando episodios...</p>
//         ) : (
//           episodios.map((episodio) => (
//             <Col key={episodio.id} sm={6} md={4} lg={3} xl={2} className="mb-4">
//               <Card bg="light" className="h-100">
//                 <Card.Body>
//                   <Card.Title>{episodio.name}</Card.Title>
//                   <Card.Text>
//                     <strong>Episodio:</strong> {episodio.episode} <br />
//                     <strong>Air date:</strong> {episodio.air_date}
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         )}
//       </Row>
//     </div>
//   );
// };

// export default Episodes;


import  { useState, useEffect } from 'react';
import { Row, Col, Pagination, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import './Episodes.css';

const Episodes = () => {
  const [episodios, setEpisodios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);

  const obtenerEpisodios = async () => {
    const respuesta = await axios.get(`https://rickandmortyapi.com/api/episode/?page=${paginaActual}`);
    setEpisodios(respuesta.data.results);
    setLoading(false);
  }

  useEffect(() => {
    obtenerEpisodios();
  }, [paginaActual]);

  const handlePaginaClick = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <Container>
            <Row>
              {loading ? (
                <p>Cargando episodios...</p>
              ) : (
                episodios.map((episodio) => (
                  <Col xs={12} sm={6} md={4} lg={3} key={episodio.id}>
                    <Card className="bg-light mb-3">
                      <Card.Img variant="top" src={episodio.image} />
                      <Card.Body>
                        <Card.Title>{episodio.name}</Card.Title>
                        <Card.Text>{episodio.air_date}</Card.Text>
                        <Card.Text>{episodio.episode}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </Container>
        </Col>
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
}

export default Episodes;