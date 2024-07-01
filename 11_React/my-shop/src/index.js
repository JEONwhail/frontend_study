import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap css 적용
// index.js 또는 app.js에 넣어도 상관없음
import 'react-toastify/dist/ReactToastify.css'; // ReactToastify.css 추가
// index.js 또는 app.js에 넣어도 상관없음
import { Provider } from "react-redux";
import { store } from './app/store';
import { BrowserRouter } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import { loginSuccess } from './features/user/userSlice';




const root = ReactDOM.createRoot(document.getElementById('root'));

// index.js에 로그인 유지하기 구현
// 로그인 시 사용자 정보를 로컬 스토리지에도 저장
// 새로고침 될 때 로컬 스토리지에 사용자 정보가 들어있다면 그 값을 스토어에 넣기
// (또는) App.js에서 useEffect써도 되는데 깜박임 현상 발생

// const loadUser ( ) => {
//   // 로그인 정보를 로컬 스토리지에서 가져옴
//   const user = localStorage.setItem('user')
// };

// 즉시 실행 함수
(( ) => {
  // 로그인 정보를 로컬 스토리지에서 가져옴
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return; //로그인 정보가 없다면 여기서 멈춤
  store.dispatch(loginSuccess(user));
})();

// const getUserFromLocalStorage = () => {
//   const userString = localStorage.getItem('user');
//   const user = JSON.parse(userString);
//   return user;
// };


root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
