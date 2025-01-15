import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={styles.container}>
      <div style={styles.toggleContainer}>
        <button
          style={isLogin ? styles.activeButton : styles.button}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          style={!isLogin ? styles.activeButton : styles.button}
          onClick={() => setIsLogin(false)}
        >
          Signup
        </button>
      </div>
      <div style={styles.formContainer}>
        {isLogin ? (
          <Login onLogin={(credentials) => console.log("Login:", credentials)} />
        ) : (
          <Signup onSignup={(userData) => console.log("Signup:", userData)} />
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    textAlign: "center",
  },
  toggleContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    background: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "0 5px",
  },
  activeButton: {
    padding: "10px 20px",
    background: "#0078d7",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "0 5px",
  },
  formContainer: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    background: "#f9f9f9",
  },
};

export default AuthPage;