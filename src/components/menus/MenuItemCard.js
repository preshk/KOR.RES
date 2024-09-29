import React from 'react';
import { Card, Button } from 'react-bootstrap';

function MenuItemCard({ item, onEdit, onDelete }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Price: ${item.price}</Card.Text>
        <Button variant="primary" onClick={() => onEdit(item)}>Edit</Button>
        <Button variant="danger" className="ml-2" onClick={() => onDelete(item.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default MenuItemCard;
