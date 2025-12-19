import React from "react";

function Menu({ menuItems, selected, setSelected }) {
  const filteredItems =
    selected === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selected);

  return (
    <div>
      <button onClick={() => setSelected("all")}>All</button>

      <button onClick={() => setSelected("breakfast")} id="filter-btn-1">
        Breakfast
      </button>

      <button onClick={() => setSelected("lunch")} id="filter-btn-2">
        Lunch
      </button>

      <button onClick={() => setSelected("shakes")} id="filter-btn-3">
        Shakes
      </button>

      <div className="menu-items">
        {filteredItems.map((item) => (
          <div
            key={item.name}
            className="menu-item"
            data-test-id={`menu-item-${item.category}`}
          >
            <img src={item.image} alt={item.name} className="menu-item-img" />

            <div className="menu-item-info">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-category">{item.category}</p>
              <p className="menu-item-price">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
