import React, { useState } from 'react';

const styles = {
  button: {
    height: 40,
    width: 200,
    backgroundColor:'green',
    fontSize:'30px'
  },
  warning: {
    backgroundColor: '#ffc107',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: '14pt',
    color: '#000',
  },
  danger: {
    backgroundColor: '#dc3545',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: '14pt',
    color: '#fff',
  }
};

function WarningBanner(props) {
  console.log(props.warn);
  // props.warn이 false라면 null 을 리턴하기때문에 컴포넌트는 렌더링 되지 않음
  if(!props.warn) {
    return null;
  }
  return <div style={styles.warning}>Warning!</div>;
}

function DangerBanner() {
  return <div style={styles.warning}>Danger!</div>;

}



function MainPage(props) {
  const [showWarning, setShowWarning] = useState(false);
  const handleToggle = () => {
    setShowWarning(!showWarning);
  }

  return (
    <>
      {/* 조건에 따라 렌더링 막기 */}
      <WarningBanner warn={showWarning} />

      {/* Quiz.조건부 렌더링으로 처리하는 것도 가능 */}
      {/* 삼항연산자 */}
      {WarningBanner ? <DangerBanner/> : null };
      {WarningBanner && <DangerBanner/> };

      <button type="button" style={styles.button} onClick={handleToggle}> {showWarning ? '감추기' : '보이기'}</button>
      
    </>
  );
}

export default MainPage;