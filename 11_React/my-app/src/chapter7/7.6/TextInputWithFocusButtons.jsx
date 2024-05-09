import { useEffect, useRef } from "react";

function TextInputWithFocusButtons() {
  const inputE1 = useRef(null); // 초기값은 null
  console.log(inputE1); // 레퍼런스 객체라 부르는 일반 자바스크립트 객체를 반환함


  useEffect(()=>{
    // 마운트 됐을 때 (렌더링 이후에) 실행되므로 여기서 로그를 찍었을 때는  input 엘리먼트가 나옴
    console.log(inputE1);

    // 활용 예: 로그인이나 회원가입 화면이 처음 보여질 때, 자동 포커스
    inputE1.current.focus();
  },[]);

  const handleButtonClick = () => {
    // 여기서 inputE1.current에 text input 객체를 담고있음
    inputE1.current.focus(); // 강제 포커스
  };



  return (
    <>
    {/* ref 속성에 inputE1을 넣어주기만 하면 해당 DOM에 접근 가능 */}
    <input ref={inputE1} type="text" />
    <button type="button" onClick={handleButtonClick}>Focus the input</button>
    </>
  );
};

export default TextInputWithFocusButtons;