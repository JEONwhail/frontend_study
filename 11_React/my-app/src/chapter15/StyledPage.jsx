import styled, { css } from "styled-components";
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

/*6. 반응형 디자인*/
// - 일반 CSS를 사용할 때와 똑같이 미디어 쿼리 사용 가능
// - 리액트스럽게 react-responsive 라이브러리 사용

/* 기본적으로 가로 길이를 1024px에 가운데 정렬하고
    가로 크기가 작아짐에 따라 크기를 줄이고 768px 미만이 되면 꽉 채우기 */
width: 1024px;
margin: 0 auto;
/* 장치가 화면이고, 최대 너비가 1024px일 때(=> 1024px 이하에서) */
@media screen and (max-width: 1024px) {
  width: 768px;
}
/* 장치가 화면이고, 최대 너비가 768px 때(=> 768px 이하에서) */
@media screen and (max-width: 768px) {
  width: 100%;
}

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

  /* 버튼사이 간격 띄우기*/
  & + &{
    margin-left: 1rem;
  }

  /* 4. 여러줄의 스타일 구문을 조건부로 설정해야하는 경우 css를 불러와 사용  */
  ${props => props.$inverted &&
  css `
  background: white;
  color:#1f1f1f;
  border: 2px solid white;
  &:hover{
    background: #b3bb33;
  }
  `
  }
`;


// 5. 스타일 확장(커스텀)하기
// Button 컴포넌트에 모서리를 둥글개 하는 스타일이 추가된 컴포넌트
const RoundedButton = styled(Button)`
  border-radius: 16px;
`;



function StyledPage() {
  return (
    <Wrapper>
      <Title>하루 존버</Title>
      <Button width="200px" height="60px">Normal</Button>
      {/* $는 스타일 지정만을 위한 prop이 DOM요소로 랜더링 되는 것을 방지하기 위해 붙여 임시 prop으로 전환할 수 있다 */}
      <Button $dark >Dark</Button>
      {/* <Button dark={true} >Dark</Button> 같은 말임 */}

      <Button $inverted >Inverted</Button>

      <RoundedButton>Rounded</RoundedButton>

    </Wrapper>
  );
};

export default StyledPage;