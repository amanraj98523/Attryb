import React, { useState } from 'react';

const Signup = ({ onSignup }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!userData.email || !userData.password || !userData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    // Simulate API call for signup
    onSignup && onSignup(userData);
    console.log('Signed up with:', userData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Signup</h2>
      {error && <p style={styles.error}>{error}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={userData.password}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={userData.confirmPassword}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Signup
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: '#f9f9f9',
  },
  input: {
    display: 'block',
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    width: '100%',
    padding: '10px',
    background: '#0078d7',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    background: '#005bb5',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default Signup;
