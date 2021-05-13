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
      Content pending to fill up.... will need to have props content to fill up
    </Card.Text>
    <Card.Link href="#">Save</Card.Link>
    <Card.Link href="#">Apply</Card.Link>
  </Card.Body>
</Card>
  
);
}