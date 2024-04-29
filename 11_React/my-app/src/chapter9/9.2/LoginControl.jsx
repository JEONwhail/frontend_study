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

function LoginControl(props) {
const [isLoggedIn,setIsLoggedIn] = useState(false);

const handleLogin = () => {
  setIsLoggedIn(true);
}

const handleLoout = () => {
  setIsLoggedIn(false);
}

let button;
if (isLoggedIn) {
 button =  <LogoutButton onClick={handleLoout} />
}else{
  button =  <LoginButton onClick={handleLogin} />
}

// if문 사용 + button 변수에 컴포넌트를 대입

  return (
    <>
    {/* Greeting 컴포넌트의 재사용 */}
      <Greeting isLoggedIn = {isLoggedIn} />;
      {button}
    </>
  );
}

export default LoginControl;