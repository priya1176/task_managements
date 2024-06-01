import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import Login from './components/Login';
import TaskList from './components/TaskList';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><TaskList /></PrivateRoute>} />
        <Route path="/add-task" element={<PrivateRoute><AddTask /></PrivateRoute>} />
        <Route path="/edit-task/:id" element={<PrivateRoute><EditTask /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
  );
};

export default App;
