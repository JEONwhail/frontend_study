import React, { useState } from 'react';
import Greeting from '../9.1/Greeting';

function LoginButton(props) {
  return (
    <button type='button' onClick={props.onClick}>
      로그인
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button type='button' onClick={props.onClick}>
      로그아웃
    </button>
  );
}

function LoginControlRefactoring(props) {
const [isLoggedIn,setIsLoggedIn] = useState(false);

const handleLogin = () => {
  setIsLoggedIn(true);
}

const handleLoout = () => {
  setIsLoggedIn(false);
}

// 2단계 :if문 사용 + button 변수에 컴포넌트를 대입
// (참고) JSX내부에서 조건부 렌더링해도 됨.근데 JSX 내부에서는 if문 사용불가
// => 삼항 연산자 또는 논리 연산자로 대체 가능


  return (
    <>
    {/* Greeting 컴포넌트의 재사용 */}
      <Greeting isLoggedIn = {isLoggedIn} />;
      {/* 삼항연산자로 if-else 구문을 JSX 내부에서 표현 */}
      {/* 조건에 따라 각기 다른 엘리먼트를 렌더링 하고 싶을 때 사용 */}
      {isLoggedIn
      ? <LogoutButton onClick={handleLoout} />
      : <LoginButton onClick={handleLogin}/>
    }
    </>
  );
}

export default LoginControlRefactoring;