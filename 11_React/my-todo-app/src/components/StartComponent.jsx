import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const StartComponent = () => {
  const navigate = useNavigate();
  const [font, setFont] = useState('MaplestoryOTFBold');

  const handleClick = () => {
    navigate('/main');
  };

  const changeFont = (fontFamily) => {
    setFont(fontFamily);
  };

  return (
    <div className="start-container" style={{ fontFamily: font }}>
      <h1>To Do List</h1>
      <button className="start-button" onClick={handleClick}>start</button>

      <div className="font-change">
        <button className="font-ch-first" onClick={() => changeFont('MaplestoryOTFBold')}>폰트변경</button>
        <button className="font-ch-secon" onClick={() => changeFont('DungGeunMo')}>폰트변경</button>
        <button className="font-ch-third" onClick={() => changeFont('GmarketSansMedium')}>폰트변경</button>
      </div>
    </div>
  );
};

export default StartComponent;
