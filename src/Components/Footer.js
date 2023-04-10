import React from 'react';
import { Container } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <Container fluid className="bg-dark text-white text-center py-3">
       <p>Desarrollado por <a href="https://www.linkedin.com/in/juan-manuel-rubio-gallego/">Juan Manuel Rubio Gallego</a> &copy; 2023</p>
    </Container>
  );
};

export default FooterComponent;