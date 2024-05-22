import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';
import OtherComponent from './components/OtherComponent';

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="App">
      {showMain ? (
        <Router>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/finish" element={<OtherComponent />} />
          </Routes>
        </Router>       
      ) : (
        <div className="start-screen">
          <h1>🍀To Do List1🍀</h1>
          <button className="start-button" onClick={() => setShowMain(true)}>
            START
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

// 🍀To Do List🍀
