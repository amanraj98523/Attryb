import React from "react";

const InventoryList = ({ items }) => (
  <div className="inventory-list">
    <h2>Inventory</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.modelName}</strong> - 
          KMs Driven: {item.kmsDriven}, 
          Accidents: {item.accidents}, 
          Previous Owners: {item.previousOwners}, 
          Registration Place: {item.registrationPlace}
        </li>
      ))}
    </ul>
  </div>
);

export default InventoryList;
