import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GamePAge from "./pages/GamePAge";
import PlacePage from "./pages/PlacePage";
import HotGamePage from "./pages/HotGamePage";
import NewGamePage from "./pages/NewGamePage";
import AboutPage from "./pages/AboutPage";
import NoMatchPage from "./pages/NoMatchPage";

// 0. react-router-dom 설치하기
// 마이앱에다가 설치
// npm install react-router-dom

// 1. react-router-dom이란?
// 리액트를 위한 라우팅 라이브러리
// 라우팅 예시: 깃허브, 네이버 바이브
// ✨네이버 바이브 : 
// ✨https://vibe.naver.com/today
// ✨https://vibe.naver.com/billboard-secondary
// ✨https://vibe.naver.com/timethemepl
// ✨위에 보면 새로운 컴포넌트가 마운트 되는 것 네이버 바이브는 동일하지만, /슬러시 뒤에 컴포넌트가 다름
// 이런게 가능함

// 라우팅: URL 별로 페이지를 나눠놓고 사용자가 원하는 경로로 보내는 과정

// 2. 페이지를 나누는 법
// 1) 리액트 미사용 시
// MPA라서 각 페이지 별 html 만듦
// /list 경로로 접속하면 해당 list.html 문서를 보여줌

// 2) 리액트 사용 시
// SPA라서 index.html 파일 하나만 존재
// ✨싱글페이지어플리케이션
// List 컴포넌트를 만듦
// /list 경로로 접속하면 기존 컴포넌트 자리에 List 컴포넌트 보여줌

// 3. 라우팅 구성을 위한 기본 컴포넌트
// 1) BrowserRouter, 2) Routes, 3) Route
// 1) BrowserRouter는 웹 브라우저에서 react-router를 사용하여 라우팅 할 수 있도록 해주는 컴포넌트
//    웹 브라우저의 history 객체를 이용해서 경로를 탐색할 수 있게 해줌
// 2) Routes는 여러 개의 Route 컴포넌트를 자식으로 가질 수 있음
// 3) Route는 Routes의 하위 컴포넌트로써 path와 element라는 props를 갖고 있음
// ✨이름 맘대로 바꾸면 안됨
//    여기에서 path는 경로를 의미, element는 경로가 일치할 경우 렌더링을 할 리액트 엘리먼트를 의미

// 사용자가 주소창에 새로운 경로를 입력하거나 페이지 내 경로 이동이 일어나게 되면 
// Routes 컴포넌트는 하위 자식으로 갖고 있는 Route 컴포넌트 중에서 현재 경로와 가장 일치하는 경로를 찾아 해당 엘리먼트를 반환
// 그러면 사용자에게 보이는 화면이 바뀌게 되는 것

// 더 많은 기능은 공식 문서 참고
// https://reactrouter.com/

function SimpleRouter() {
  return (
    // 가장 바깥쪽에는 BrowserRouter가 무조건 있어야 Routes를 쓸 수 있음
    // 예를 들어 <App/ > 이걸 감싸면 어디서든 쓸 수 있음 머 인덱스 제이에스에서 감싸나 위치만 다르고 같음
    <BrowserRouter>
    
    {/* Routes는 부모요소임 */}
      <Routes>
        {/* /로 접속하면 MainPage 컴포넌트가 렌더링 */}
        <Route path="/" element={<MainPage/>} />
        {/* Quiz : GamePAge 와 PlacePage도 이동되게끔 만들기 */}
        <Route path="/game" element={<GamePAge/>} />
        <Route path="/place" element={<PlacePage/>} />

        {/* 방법 01 : 서브 경로 설정 */}
        {/* <Route path="/game/HotGamePage" element={<HotGamePage />} />
        <Route path="/game/NewGamePage" element={<NewGamePage />} /> */}

        {/* 방법 02 : Nested Route 방식 */}
        {/* 서브 경로 방식과 차이점 : 부모 엘리먼트 + 자식 엘리먼트가 같이 ㅂ보임 */}
        {/* 부모 안에 자식들을 렌더랑해 보여줌(부모 안에서 어디에 보여줄지는 Outlet 컴포넌트로 지정) */}
        {/* 활용 예 : 헤더,푸터 사이의 메인영역 */}
        {/* Nested안에 Nested가능 제한없음 */}
        <Route path="/game" element={<GamePAge/>} >
          <Route path="hot" element={ <HotGamePage/> } >
          </Route>

          <Route path="new" element={ <NewGamePage/> } />
        </Route>

        {/* URL 파라미터와 쿼리스트링 */}
        {/* URL 파라미터는 주소의 경로에 유동적인 값을 넣는 형태고, 쿼리스트링은 주소의 뒷무문에 ? 문자열 이후에 key=value로 값을 정의하며 &로 구분을 하는 형태 */}
        {/* 주로 파미터는 ID 또는 이름을 사용하여 데이터를 조회할 때 사용하고, 쿼리스트링은 키워드 검색, 페이지네이션, 정렬방식 등 데이터 조회에 필요한 옵션을 전달 할때 사용 */}
        {/* 근데 꼭 위와 같이 쓰라고 정래진 규칙이 있는 것은 아님 */}

        <Route path="/about" element={<AboutPage/>} />

        {/* 위에 설정한 라우팅 경로 이외의 경우 */}
        {/* *의 의미는 모든 match anything */}
        <Route path="*"  element={<NoMatchPage />} />

      </Routes> 
    </BrowserRouter>
  );
};

export default SimpleRouter;