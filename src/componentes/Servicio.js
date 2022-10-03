import React from 'react'
import img from '../assets/Repair.jpg';
import Card from 'react-bootstrap/Card';
import '../../src/App.css';
import { Badge } from 'react-bootstrap';

function Servicio() {
  return (
    
    <Card className="bg-dark text-white text-center">
      <Card.Img   style={{ height:'55rem'}}src={img} alt="Card image"/>
      <Card.ImgOverlay>
        <Card.Title><h1>Servicio  Especializado<Badge bg="secondary"></Badge></h1> </Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Card.Text> Garantia Apple Oficial</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Servicio;