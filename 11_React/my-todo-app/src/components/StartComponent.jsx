import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const StartComponent = ({ setFont }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showFontModal, setShowFontModal] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleYes = () => {
    setShowPopup(false);
    setShowFontModal(true);
  };

  const handleNo = () => {
    setShowPopup(false);
    navigate('/main');
  };

  const changeFont = (fontFamily) => {
    setFont(fontFamily);
    setShowFontModal(false);
    navigate('/main');
  };

  return (
    <div className="start-container">
      <h1>To Do List</h1>
      <button className="start-button" onClick={handleClick}>start</button>

      <div className={`popup ${showPopup ? 'show' : ''}`}>
        <p>💌축하드립니다.💌</p>
        <p>🎇🎈🎇🎈🎇🎈🎇🎈🎇</p>
        <p>폰트 변경 이벤트가 발생했습니다.</p>
        <p>변경하시겠습니까?</p>
        <div className="popup-buttons">
          <button onClick={handleYes}>YES</button>
          <button onClick={handleNo}>NO</button>
        </div>
      </div>

      {showFontModal && (
        <div className="font-modal">
          <h2>폰트를 선택해주세요.</h2>
          <div className="font-buttons">
            <button className="font-ch-first" onClick={() => changeFont('MaplestoryOTFBold')}>
              이벤트 01
              <div style={{ fontFamily: 'MaplestoryOTFBold' }}>예시 텍스트</div>
            </button>
            <button className="font-ch-secon" onClick={() => changeFont('DungGeunMo')}>
              이벤트 02
              <div style={{ fontFamily: 'DungGeunMo' }}>예시 텍스트</div>
            </button>
            <button className="font-ch-third" onClick={() => changeFont('GmarketSansMedium')}>
              이벤트 03
              <div style={{ fontFamily: 'GmarketSansMedium' }}>예시 텍스트</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartComponent;
