import styled from "styled-components";

const TodoTemplateWrapper = styled.div`
  width: 512px;
  /* margin: 6rem 0 auto; */
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  /* 아래와 같이 작성하면 하위(후손,자손)를 의미함 */
  /* 아래처럼 컴포넌트로 따로 만들어도 되고 아니면 Sass처럼 내부에 class로 만들어도 됨 */
  .app-title{
  background: #02a855;
  color: #050000;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  .content{
    background: white;
  }
`;



const AppTitle = styled.div`
  background: #02a855;
  color: #050000;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 화면을 가운데 정렬하고, 앱 타이틀을 보여주는 컴포넌트
// children으로 내부 자식 엘리먼트들을 props로 받아와서 렌더링
function TodoTemplate(props) {
  const { children } = props;
  return (
    <TodoTemplateWrapper>
      {/* <AppTitle>일정 관리</AppTitle> */}
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>

    </TodoTemplateWrapper>
  );
};

export default TodoTemplate;