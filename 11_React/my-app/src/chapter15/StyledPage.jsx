import styled from "styled-components";
// styled-components 설치하기
// npm install styled.components

// CSS in JS란?
// JS안에 CSS 작성하는 것

// styled-components란?
// CSS 문법을 그대로 사용하면서 결과물로 스타일링된 컴포넌트를 만들어주는 라이브러리
// 컴포넌트 개념을 사용하기 때문에 리액트와 궁합이 잘 맞음
// 백틱을 사용하여 구성 요소의 스타일을 지정

// 다양한 문법은 공식 문서 참고
// https://styled-components.com/docs

// 1. 기본적인 사용법
const Wrapper = styled.div`
padding: 1rem;
background: #018b52;
// 색상 바로 나오게끔 vscode-styled-components 익스텍션 깔기
`;

const Title = styled.h1`
font-size: 1.5rem;
color: white;
text-align: center;
`

// 2. props 사용하기
// 컴포넌트 형태라 pops사용이 가능(최고장점 중 하나)
const Button = styled.button`
  width :${(props)=>props.width || '100px' };
  height: ${(props)=>props.height || '40px' };
  background:${props=>props.$dark ? 'black' : 'white' };
  color: ${props=>props.$dark ? 'white' : 'black' };
  border: 2px solid black;
  cursor: pointer;
  /* . &(parent selector)를 사용하여 바깥쪽 선택자 참조 가능 (like Sass) */
  /* 여기선 Button자기 자신을 참조 */
  &:hover{
    background: #b3bb33;
  }
`




function StyledPage() {
  return (
    <Wrapper>
      <Title>안농안ㅇ옹안옹주말?</Title>
      <Button width="200px" height="60px">Normal</Button>
      {/* $는 스타일 지정만을 위한 prop이 DOM요소로 랜더링 되는 것을 방지하기 위해 붙여 임시 prop으로 전환할 수 있다 */}
      <Button $dark >Dark</Button>
      {/* <Button dark={true} >Dark</Button> 같은 말임 */}

    </Wrapper>
  );
};

export default StyledPage;