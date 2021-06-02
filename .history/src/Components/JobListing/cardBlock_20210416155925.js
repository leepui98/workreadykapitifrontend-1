import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';

export default function cardBlock(){
    return(
        <Card style={{ width: '50rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Save</Card.Link>
    <Card.Link href="#">Apply</Card.Link>
  </Card.Body>
</Card>
  
);
}