import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../styles.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/task/tasks/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const toggleTask = async (taskId) => {
    try {
      await axios.post(`http://localhost:8000/task/tasks/${taskId}/toggle/`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      fetchTasks(); 
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      navigate('/login');
    }
  };
  
  

  return (
    <div className="container1" style={{width:600}}>
    <button className="logout-btn" onClick={handleLogout}>Logout</button>
      <h2>Your Tasks List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div>
              <strong>Title:</strong> <span>{task.title}</span>
            </div>
            <div>
              <strong>Description:</strong> <span>{task.description}</span>
            </div>
            <div className="task-status">
              <span>{task.completed ? 'Complete' : 'Incomplete'}</span>
              <FormControlLabel
                control={
                  <Switch
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    name="completed"
                    size="large"
                  />
                }
              />
            </div>
            <Link className="edit-task-link" to={`/edit-task/${task.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link className="add-task-link" to="/add-task/">Add Task</Link>
    </div>
  );
};

export default TaskList;
