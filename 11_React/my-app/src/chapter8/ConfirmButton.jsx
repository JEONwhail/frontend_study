import React, { useState } from 'react';

function ConfirmButton(props) {
  const [confirmed, setConfirmed] = useState(false);
  const handleCo = () => {
    setConfirmed(true); 
    console.log(confirmed);
    // set함수는 비동기로 처리됨(= 비동기 함수)
  };

  return (

    <>
    <button type='button' onClick={handleCo} disabled={confirmed}>
    {confirmed ? '확인됨' : '확인하기'}
    </button>

    <div>
      <input type="text" readOnly={confirmed} />
      <button type='button' onClick={handleCo} disabled={confirmed}>
        {confirmed ? '확인됨' : '확인하기'}
      </button>
    </div>
    </>

    


  );
}

export default ConfirmButton;

// Quiz 사용자에게 확인을 요구하는 버튼 컴포넌트
// 버튼을 누르면 '확인하기'기 '확인됨'으로 변경되면서 버튼 비활성화 처리 해보기