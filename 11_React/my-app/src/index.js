import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';




import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropstUse from './chapter5/5.3/PropstUse';
import CommentEx from './chapter5/5.6/CommentEx';
import CommentList from './chapter5/CommentList';
import Counter from './chapter7/7.2/Counter';
import Toggle from './chapter8/8.1/Toggle';
import MyButton from './chapter8/8.2/MyButton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';
import Mailbox from './chapter9/9.3/Mailbox';
import LoginControlRefactoring from './chapter9/9.3/LoginControlRefactoring';
import MainPage from './chapter9/9.4/MainPage';
import LandingPage from './chapter9/LandingPage';
import NumberList from './chapter10/NumberList';
import ListKey from './chapter10/10.2/ListKey';
import AttendanceBook from './chapter10/AttendanceBook';
import NameForm from './chapter11/11.2/NameForm';
import EssayForm from './chapter11/11.3/EssayForm';
import FlavorForm from './chapter11/11.3/FlavorForm';
import Reservation from './chapter11/11.4/Reservation';
import ReservationRefactoring from './chapter11/11.4/ReservationRefactoring';
import SignUp from './chapter11/SignUp';
import TextInputWithFocusButtons from './chapter7/7.6/TextInputWithFocusButtons';
import FileInput from './chapter11/11.3/FileInput';
import UnitCalculator from './chapter12/UnitCalculator';
import UnitCounter from './chapter12/UnitCounter';
import UnitInput from './chapter12/UnitInput';
import FancyBorder from './chapter13/13.1.1.1/FancyBorder';
import WelcomeDialog from './chapter13/13.1.1.1/WelcomeDialog';
import SplitPaneSection from './chapter13/13.1.1.2/SplitPaneSection';
import DialogContainer from './chapter13/13.1.2/DialogContainer';
import SighUpDialog from './chapter13/13.1.3/SighUpDialog';
import ProfileCard from './chapter13/ProfileCard';
import StyledPage from './chapter15/StyledPage';
import Blocks from './chapter15/theme/Blocks';
import ComponentVariable from './chapter7/7.6/ComponentVariable';
import CounterEffect from './chapter7/7.3/ex1/CounterEffect';
import TimerContainer from './chapter7/7.3/ex2/TimerContainer';
import EffectSummary from './chapter7/7.3/ex3/EffectSummary';
import EffectContainer from './chapter7/7.3/ex3/EffectContainer';
import SimpleRouter from './chapter16/SimpleRouter';
import ApiRequest from './chpter17/ApiRequest';
import ReduxTextApp from './chapter18/ReduxTextApp.jsx';
import { store } from './chapter18/app/store';



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
    // <Counter />

    // 8장예제
    // <Toggle />
    // <MyButton />
    // <ConfirmButton />
    // <LoginControl />
    // <Mailbox unreadMessages={[]} />
    // <LoginControlRefactoring/>
    // <MainPage/>
    // <LandingPage/>
    // <NumberList/>
    // <ListKey/>
    // <AttendanceBook/>
    // <NameForm/>
    // <EssayForm/>
    // <FlavorForm/>
    // <Reservation/>
    // <ReservationRefactoring/>
    // <SignUp/>
    // <TextInputWithFocusButtons/>
    // <FileInput/>
    // <UnitCalculator/>
    // <UnitCounter/>
    // <UnitInput/>
    // <FancyBorder/>
    // <WelcomeDialog/>
    // <SplitPaneSection/>
    // <DialogContainer/>
    // <SighUpDialog/>
    // <ProfileCard/>
    //14 예제
    // <StyledPage/>
    // <Blocks/>
    // <ComponentVariable/>
    // <CounterEffect/>
    // <TimerContainer/>
    // <EffectSummary/>
    // <EffectContainer/>
    // <SimpleRouter/>
    // <ApiRequest/>

    // 18장 예제
  // 2. 리액트에 Redux Store 제공하기 (index.js)
  // ReduxTextApp 컴포넌트와 그 하위 자식들은 Redux Store에 접근 가능
  // 저장된 state들을 마음대로 꺼내 쓸 수 있음
    <Provider store={store}>
        <ReduxTextApp />
    </Provider>


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
