import React from "react";
import './jsxUse.css';


function JsxUse() {  // 컴포먼트 명과 파일 이름과같도록
  // JSX의 사용법(문법)
  // 1. 꼭 닫혀야 하는 태그
  // const element = (
  //   <div>
  //     <div>
  //       <input type="text">
  //       <br>
  //     </div>
  // );
  // 해당하는 JSX 닫는 태그가 필요합니다.
  // 인풋이나 br태그에도 무조건 닫는 태그 필수
  // 없으면 무조건 오류남.

  //HTML 에서는 태그를 닫지 않고 사용 가능
  //리액트에서는 태그를 열었으면 무조건 닫아야 함

//   const element = (
//     <div>
//       <div>
//         <input type="text" />
//         <br />
//       </div>
//     </div>
//   );

//   return element;
// }

// export default JsxUse; // JsxUse 함수 컴포넌트 내보내기
// 내보내야 뭘 할 수 있음 당연함
// export를 해줘야 다른곳에서 import 해서 사용 가능

// 2. 꼭 감싸줘야만 하는 태그
// 두개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 함
// const element = (
// 반드시 하나의 부모 태그로 감싸져야 함
  // <div>
  //   <div> 하이루 </div>
  //   <div> 빠잉 </div>
  // </div>

  // 이렇게 단순히 걈싸기 위하여 불필욯한 div로 감싸는게 별로 좋지 않을 수 있음
  // HTML 중첨구조가 복잡해지며 그에 따른 스타일 설정을 할 땨도 복잡
  // 이때 사용한ㄴ것이 React Fragment

  // <React.Fragment>
  //   <div> 하이루 </div>
  //   <div> 빠잉 </div>
  // </React.Fragment>
  // React.Fragment 는 생략가능
  // <>
  //   <div> 하이루 </div>
  //   <div> 빠잉 </div>
  // </>

// );

  // 3. JSX안에 자바스크립트 값 또는 표현식 사용하기
  // 자바스크립트 변수(또는 함수)를 사용할 때는 {중괄호}사용
  const name = 'React';

  const user = {
    firstName : 'JiYeon',
    lastName : 'Kim'
  };


  const formatName = (user) => {
    return `${user.firstName} ${user.lastName}`
  };
  // 여기까지는 자바스크립트

  // const element = (
  //   <>
  //   <div>{name}배우기</div>
  //   <h1>Hello, {formatName(user)}</h1>
  //   </>
    
  // ) // 이게 JSX임

  // 4. style 과 className 
  // 인라인 스타일은 객체 형태로 작성하는데 background-color 처럼 -로 구분되어 있는 이름은 camelCase 형태로 네이밍

//   const element = (
//  <div style={{backgroundColor: 'black'}}> 리액트 공부하기 </div>
//   );

  const style = {
    backgroundColor: 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '1rem'

  };
    
  // const element = (
  //   <>
  //   <div style={style}>리액트 공부하기 </div>
  //   <div className="gray-box"></div>
  //   </>
  // );

  // 5. JSX 주석
  // const a = 1; // JS 주석



  const element = (
    <>
    { /* 주석은 화면에 보이지 않습니다.*/ }
    // 주석은 화면에 보이지 않습니다.
    /* 주석은 화면에 보이지 않습니다. */

    <div
    // 열리는 태그 내부에서는 이렇게 주석 작성
    >
      주석테스트
    </div>
    </>

    

  )

return element;
}
export default JsxUse;