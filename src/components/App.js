import React, { useState } from "react";
import Menu from "./Menu";

const initialMenuItems = [
  {
    name: "Pancake Stack",
    category: "breakfast",
    image: "https://picsum.photos/seed/pancakes/400/300",
    price: 6.99,
  },
  {
    name: "Omelette Deluxe",
    category: "breakfast",
    image: "https://picsum.photos/seed/omelette/400/300",
    price: 7.49,
  },
  {
    name: "Avocado Toast",
    category: "breakfast",
    image: "https://picsum.photos/seed/avocado/400/300",
    price: 5.99,
  },
  {
    name: "Grilled Chicken Sandwich",
    category: "lunch",
    image: "https://picsum.photos/seed/chicken/400/300",
    price: 9.99,
  },
  {
    name: "Caesar Salad",
    category: "lunch",
    image: "https://picsum.photos/seed/salad/400/300",
    price: 8.49,
  },
  {
    name: "Cheeseburger",
    category: "lunch",
    image: "https://picsum.photos/seed/burger/400/300",
    price: 10.49,
  },
  {
    name: "Grilled Salmon",
    category: "shakes",
    image: "https://picsum.photos/seed/salmon/400/300",
    price: 14.99,
  },
  {
    name: "Spaghetti Bolognese",
    category: "shakes",
    image: "https://picsum.photos/seed/spaghetti/400/300",
    price: 12.99,
  },
  {
    name: "Steak with Vegetables",
    category: "shakes",
    image: "https://picsum.photos/seed/steak/400/300",
    price: 18.99,
  },
];

function App() {
  const [menuItems] = useState(initialMenuItems);

  const [selected, setSelected] = useState("all");

  return (
    <div id="main">
      <Menu
        menuItems={menuItems}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default App;
