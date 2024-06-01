import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/task/auth/register/', { username, password });
      alert('User registered successfully!');
      navigate('/login'); 
    } catch (error) {
      console.error('Error registering:', error);
    }
  };


  return (
    <form onSubmit={handleRegister}>
       
      <div >
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
    </form>
    
  );
};

export default Register;
