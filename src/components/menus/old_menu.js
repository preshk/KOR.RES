import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import MenuItemCard from './MenuItemCard';

function old_Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      // const response = await axios.get('https://api.koreanrestaurant.com/menu');
      // setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const handleEdit = (item) => {
    // Implement edit functionality
    console.log('Edit item:', item);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api.koreanrestaurant.com/menu/${id}`);
      fetchMenuItems(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting menu item:', error);
    }
  };

  return (
    <div>
      <h1>Our Menu</h1>
      <Row>
        {menuItems.map((item) => (
          <Col key={item.id} sm={6} md={4} lg={3} className="mb-4">
            <MenuItemCard item={item} onEdit={handleEdit} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default old_Menu;
