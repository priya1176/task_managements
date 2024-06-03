import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/task/auth/register/', { username, password });
      alert('User registered successfully!');
      navigate('/login'); 
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage('An error occurred while registering. Please try again later.');
      } else {
        setErrorMessage('User already exists. Please login or choose another username.');
      }
      console.error('Error registering:', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          pattern="[a-zA-Z0-9]+" 
          title="Username must be alphanumeric." 
          required 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$"
          title="Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number." 
          required 
        />

      </div>
      <button type="submit">Register</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
};

export default Register;
