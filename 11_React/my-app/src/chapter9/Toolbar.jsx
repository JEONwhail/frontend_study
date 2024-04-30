import React from 'react';

const styles = {
  wrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid gray'
  },
  greeting: {
    marginRight: 8
  },
};
// {/* Quiz:
// 로그인/로그아웃 버튼을 누를 때마다 isLoggedIn 값이 바뀌고
// 로그인/로그아웃 버튼이 바뀌도록 조건부 렌더링
// 로그인 상태이면 인사말이 나오도록 조건부 렌더링
// */}
function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props; 
  console.log(isLoggedIn);
  return (
    <div style={styles.wrapper}>
      {isLoggedIn ? (
        <div>
          <span style={styles.greeting}>✨✨🎉🎇🎈🎆welcome to the show🎆🎈🎇🎉✨✨</span>
          <button onClick={onClickLogout}>로그아웃</button>
        </div>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}

export default Toolbar;


