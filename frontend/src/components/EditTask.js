import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const EditTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await api.get(`tasks/${id}/`);
                setTitle(response.data.title);
                setDescription(response.data.description);
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };

        fetchTask();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await api.put(`tasks/${id}/`, { title, description });
            navigate('/');
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <form onSubmit={handleUpdate}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <button type="submit">Update Task</button>
        </form>
    );
};

export default EditTask;
