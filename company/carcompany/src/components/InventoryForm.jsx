import React, { useState } from "react";

const InventoryForm = ({ onAdd }) => {
  const [inventory, setInventory] = useState({
    modelName: "",
    kmsDriven: "",
    scratches: "",
    originalPaint: "",
    accidents: 0,
    previousOwners: 0,
    registrationPlace: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inventory);
    setInventory({
      modelName: "",
      kmsDriven: "",
      scratches: "",
      originalPaint: "",
      accidents: 0,
      previousOwners: 0,
      registrationPlace: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="inventory-form">
      <h2>Add Inventory</h2>
      <input
        type="text"
        name="modelName"
        placeholder="Model Name"
        value={inventory.modelName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="kmsDriven"
        placeholder="KMs Driven"
        value={inventory.kmsDriven}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="scratches"
        placeholder="Major Scratches"
        value={inventory.scratches}
        onChange={handleChange}
      />
      <input
        type="text"
        name="originalPaint"
        placeholder="Original Paint"
        value={inventory.originalPaint}
        onChange={handleChange}
      />
      <input
        type="number"
        name="accidents"
        placeholder="Accidents Reported"
        value={inventory.accidents}
        onChange={handleChange}
      />
      <input
        type="number"
        name="previousOwners"
        placeholder="Previous Owners"
        value={inventory.previousOwners}
        onChange={handleChange}
      />
      <input
        type="text"
        name="registrationPlace"
        placeholder="Registration Place"
        value={inventory.registrationPlace}
        onChange={handleChange}
      />
      <button type="submit">Add Inventory</button>
    </form>
  );
};

export default InventoryForm;
