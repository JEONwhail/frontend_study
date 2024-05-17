import { Link, Outlet, useNavigate } from "react-router-dom";

function GamePAge() {
  const navigate = useNavigate();
  return (
    <>
    <h1>게임페이지</h1>
    <ul>
      <li>
        <Link to = "/game/hot">인기게임</Link>
      </li>

      <li>
      <Link to = "/game/new">신규게임</Link>
      </li>
    </ul>

    {/* Nested Route의 자식 엘리먼트를 해당 위치에 보여주는 역할 */}
    <Outlet />

    {/* Quiz : 메인으로 돌아가는 버튼 */}
    <button type="button" onClick={()=>navigate('/')}>메인페이지</button>
    </>
  );
};

export default GamePAge;