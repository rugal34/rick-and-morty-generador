import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Cardpersonaje = ({ nombre, foto, genero, ubicacion, origen, especie, estado }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={foto} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item><b>Genero:</b> {genero}</ListGroup.Item>
          <ListGroup.Item><b>Ubicación:</b> {ubicacion}</ListGroup.Item>
          <ListGroup.Item><b>Origen:</b> {origen}</ListGroup.Item>
          <ListGroup.Item><b>Especie:</b> {especie}</ListGroup.Item>
          <ListGroup.Item><b>Estado:</b> {estado}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Cardpersonaje;