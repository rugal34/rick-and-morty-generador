// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';

// const NavbarComponent = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Navbar.Brand href="#home">Rick and Morty</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#episodes">Episodios</Nav.Link>
//           <Nav.Link href="#characters">Personajes</Nav.Link>
//           <Nav.Link href="#character-generator">Generador de Personajes</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavbarComponent;

// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';

// const NavbarComponent = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Navbar.Brand href="#home">Rick and Morty</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#episodes">Episodios</Nav.Link>
//           <Nav.Link href="#characters">Personajes</Nav.Link>
//           <Nav.Link href="#character-generator">Generador de Personajes</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavbarComponent;

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Rick and Morty</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/src/Components/episodios.js">Episodios</Nav.Link>
          <Nav.Link as={Link} to="/src/Components/Characters.js">Personajes</Nav.Link>
          <Nav.Link as={Link} to="/src/Components/Generador.js">Generador de Personajes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;