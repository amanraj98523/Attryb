import React, { useState } from "react";
import Header from "./components/Header";
import OEMSpecsSearch from "./components/OEMSpecsSearch";
import InventoryForm from "./components/InventoryForm";
import InventoryList from "./components/InventoryList";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import "./styles.css";

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleAddInventory = (newItem) => {
    setInventory((prev) => [...prev, newItem]);
  };

  return (
    <div className="app">
      <header className="header">
        BUYC Marketplace
        <div className="auth-buttons">
          <button onClick={() => setShowLogin(!showLogin)}>Login</button>
          <button onClick={() => setShowSignup(!showSignup)}>Signup</button>
        </div>
      </header>
      <div className="main-content">
        <OEMSpecsSearch />
        <InventoryForm onAdd={handleAddInventory} />
        <InventoryList items={inventory} />
      </div>

      {showLogin && (
        <div className="auth-modal">
          <div className="auth-modal-content">
            <Login onLogin={(data) => console.log("Logged in:", data)} />
            <button
              className="close-btn"
              onClick={() => setShowLogin(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showSignup && (
        <div className="auth-modal">
          <div className="auth-modal-content">
            <Signup onSignup={(data) => console.log("Signed up:", data)} />
            <button
              className="close-btn"
              onClick={() => setShowSignup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
