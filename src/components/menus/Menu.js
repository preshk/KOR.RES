import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Menu() {
  const [activeSection, setActiveSection] = useState('Food'); // To control which section is displayed
  const [selectedFood, setSelectedFood] = useState(null); // To display selected food details

  // List of food items categorized by type
  const foodItems = {
    Food: [
      { name: 'Fried Dumplings', description: 'Your choice of 5 Beef, Pork or Vegtable dumplings for 6.50$' },
      { name: 'Bibimbap', description: 'Mixed Rice and vegtables 12.00$ Add meat for 3.00$ extra' },
      { name: 'Pork Belly', description: 'Thin sliced pork belly with fried rice 10.00$' },
      { name: 'Marinated Crab', description: 'Marinated crab with a side of white rice 9.50$' },
      { name: 'Bulgogi', description: 'Marianted sliced ribeye 13.00$ ' }
    ],
    Drink: [
      { name: 'Coffee', description: 'Regular coffee 2.50$' },
      { name: 'SoJu', description: 'Flavored Soju, Peach, Apple, Fruit Punch, Yogurt 12.50$' },
      { name: 'Rice Wine', description: 'Peach or Regular 8.00$' },
      { name: 'Hot tea', description: 'Jasmine unsweet tea 3.00$' },
      { name: 'Soda', description: 'Coke, Sprite, Diet Coke, Ginger Ale, Lemonade, refills available etc. 2.50$' }
    ],
    Dessert: [
      { name: 'Mochi', description: 'Japanese rice cake with a sweet filling 4.00$' },
      { name: 'Patbingsu', description: 'Korean shaved ice dessert with sweet toppings 6.50$' },
      { name: 'Hotteok', description: 'Korean sweet pancake with a syrup filling 5.00$' }
    ]
  };

  // Function to handle the button click to change the section
  function handleSectionChange(section) {
    setActiveSection(section);
    setSelectedFood(null); // Reset selected food when switching sections
  }

  // Function to handle food item click and show details below
  function handleFoodClick(food) {
    setSelectedFood(food);
  }

  return (
    <Container id="menu">
      <div className="text-center my-4">
        <h5 className="badge bg-dark text-white">THE MENU</h5>

        {/* Section buttons */}
        <div className="my-4">
          <Button variant="primary" className="mx-2" onClick={() => handleSectionChange('Food')}>Food</Button>
          <Button variant="primary" className="mx-2" onClick={() => handleSectionChange('Drink')}>Drinks</Button>
          <Button variant="primary" className="mx-2" onClick={() => handleSectionChange('Dessert')}>Desserts</Button>
        </div>

        {/* Display the active section */}
        <h3 className="my-4">{activeSection}</h3>
        <Card className="my-4 p-4">
          {foodItems[activeSection].map((food, index) => (
            <div key={index} onClick={() => handleFoodClick(food)} style={{ cursor: 'pointer' }}>
              <h5>{food.name}</h5>
              <p className="text-muted">{food.description}</p>
            </div>
          ))}
        </Card>

        {/* Display selected food details below */}
        {selectedFood && (
          <Card className="mt-4 p-4">
            <h4>Selected Item</h4>
            <h5>{selectedFood.name}</h5>
            <p>{selectedFood.description}</p>
          </Card>
        )}
      </div>
    </Container>
  );
}


export default Menu;
