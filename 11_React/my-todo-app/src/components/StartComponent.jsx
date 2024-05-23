import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const StartComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main');
  };

  return (
    <div className="start-container">
      <h1>To Do List</h1>
      <button className="start-button" onClick={handleClick}>start</button>
    </div>
  );
};

export default StartComponent;
