import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/task/tasks/', { title, description }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      navigate('/');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleAddTask}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
