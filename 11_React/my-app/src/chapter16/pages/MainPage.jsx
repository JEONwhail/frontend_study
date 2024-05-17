import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MainPage() {
  // 사용자가 직접 경로를 쳐서 이동하는 경우는 드물다
  // 페이지 이동 시키는 훅(함수)를 제공 = useNavigate()
  // 사용법
  // navigate('/경로);
  // navigate(1); 또는 navigate(-1); => 앞으로가기 뒤로가기

  const navigate =  useNavigate();


  return (
    <>
    <h1>메인페이지</h1>
    <ul>
      <li onClick={()=>{ navigate('/place'); }}> 장소 </li>
      <li onClick={()=>{ navigate('/game'); }}>  게임 </li>
    </ul>

     {/* a태그 역할의 Link 컴포넌트 */}
      {/* 차이점?
        a태그의 기본 동작은 페이지를 이동시키면서, 페이지를 아예 새로 불러옴(새로고침)
          렌더링된 컴포넌트가 모두 사라지고 새로 렌더링을 하게됨(언마운팅 -> 마운팅)
          그렇게되면 리액트 앱의 상태들이 초기화 😢

          Link 컴포넌트는 새로고침을 막음
          => a태그 사용이 필요하다면 Link 컴포넌트를 사용해보자
      */}
      <ul>
        <li>
          <Link to="/place">장소</Link>
          {/* 자동으로 임포트 안되서 수동 입력함 😡😠 */}
        </li>
        <li>
        <Link to="/game">게임</Link>
        </li>
      </ul>
    </>
  );
};

export default MainPage;