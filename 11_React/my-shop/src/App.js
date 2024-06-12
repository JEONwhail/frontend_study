import { createGlobalStyle } from 'styled-components';
// 'styled-components' 를 쓰게되면 굳이 css 파일은 필요없음.
import Layout from './pages/Layout'
import Main from './pages/Main';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import ProductDetail from './pages/ProductDetail';
import { ToastContainer, Zoom } from 'react-toastify';


// 글로벌(공통) 스타일설정
const GlobalStyle = createGlobalStyle`

  body {
    box-sizing:  border-box;
  }

  *{
    box-sizing: inherit;
  }

  #root{
    text-align: center;
  }
  /* index.html 파일에 있음 */

  .cursor-pointer {
    cursor: pointer;
  }

`;

function App() {
  return (
    <>
    {/* 부트스트랩 연습 */}
    {/* 1) 리액트 부트스트랩 */}
    {/* <Button variant="primary">Primary</Button> */}
    {/* 2) 기존 부트스트랩 */}
    {/* <button type="button" className="btn btn-primary">Primary</button> */}

    <GlobalStyle />
    
    {/* Quiz: 헤더를 Layout 컴포넌트로 추출 및 Nested Route 구성해보기 */}

    <Routes>
      <Route path="/" element={<Layout />}>
        {/* index: index route(여기서는 기본 자식 라우트를 의미) */}
        <Route index element={<Main />} />
        {/* <Route path="detail" element={<ProductDetail />} /> */}
        {/* Quiz: 상품별 상세페이지를 여러 개를 라우팅하려면? URL파라미터 사용
        예 : /detail/1로 접속하면 productId에 1이 담기도록 설정 */}
        <Route path="detail/:productId" element={<ProductDetail />} />
      </Route>
    </Routes>


    {/* 토스트 컨테이너 하나로 재사용
    만약 다른 옵션의 토스트를 쓰고 싶다면 컨테이너 여러개 사용  */}
    <ToastContainer
    position="bottom-right"
    autoClose={3000}
    pauseOnFocusLoss={false}
    theme="colored"
    transition={Zoom}

    />
  </>
  );
}

export default App;

// 패키지 설치 및 StrictMode 제거
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios

// Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
// 리액트 용이 따로 있는데 나는 기존 것이 더 익숙하다 싶으면 기존 Bootstrap을 써도 무관
// https://react-bootstrap.netlify.app/