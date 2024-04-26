import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropstUse from './chapter5/5.3/PropstUse';
import CommentEx from './chapter5/5.6/CommentEx';
import CommentList from './chapter5/CommentList';
import Counter from './chapter7/7.2/Counter';



const root = ReactDOM.createRoot(document.getElementById('root'));

// Root DOM Node에 리액트 컴포넌트를 렌더링 하도록 하는 함수(React 엘리먼트를 DOM 엘리먼트로 렌더링하는 역할)
// 처음으로 렌더링할 컴포넌트를 지정하는데 App 컴포넌트가 기본적으로 들어가있음
root.render(
    // <App />

    // 3장 예제
    // <JsxUse />
    // 꺽쇠 후 입력하면 자동완성 후 임포트 한 줄 생김
    // 닫는 태그 필수
    // 렌더링 하고 싶은 걸 여기다가 넣으면 댐
    // 실제로는 <App />은 안건들임
    // 원래는 App.js를 수정함

    // <Library />
    
//     // 4장 예제
//     // 1초마다 Clock 컴포넌트를 렌더린하는 코드
//     setInterval(()=>{
//         root.render(<Clock />);
//     },1000)
//     // <Clock />

// 5장예제
// <PropstUse />
    // <CommentEx  
    // date = {new Date()} 
    // text = "리액트를 즐길 수 있나"
    // author=({
    //   name : 'Hello world',
    //   avatarUrl : 'http://placekitten.com/200/300'
    // }
    
    // )
    // />

    // <CommentEx 
    // user={{
    //     name: 'Hello Kitty',
    //     // avatarUrl: 'http://placekitten.com/50/50'
    //     // avatarUrl: 'https://baconmockup.com/300/200'
    //     avatarUrl: 'https://placedog.net/400x200'
    //   }} 
    //   date={new Date()} 
    //   text="리액트를 즐기세요!" 
    // />

    // <CommentList />
    <Counter />
);

//  // 4장 예제
//     // 1초마다 Clock 컴포넌트를 렌더린하는 코드
//     setInterval(()=>{
//         root.render(<Clock />);
//     },1000)
//     // <Clock />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
