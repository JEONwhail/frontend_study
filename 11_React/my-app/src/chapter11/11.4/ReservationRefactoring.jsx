import { useState } from "react";


// 개선한 코드
function ReservationRefactoring() {

  // 만약 여러개의 state가 서로 관련이 있는 데이터라면 객체 형테로 묶어서 관리 가능
  // input에 name속성을 설정하고 이벤트가 발생했을 때 이 값을 참조하여 객체에 접근
  // 물론 관련이 없는 데이터라면 여러개의 state로 선언해서 사용
  const [inputs, setInputs] = useState({
    breakfast : false,
    numberOfGuest : 2,
    roomType : 'SINGLE'
  });

  const { breakfast,numberOfGuest,roomType } = inputs; // 구조 분해 할당을 통해 값 추출

  const handleInputChange = (e) => {
    console.log(e.target); //이벤트가 발생한 대상 객체임

    const { type, name, checked, value } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    console.log(name,inputValue);

    // list할때 했던거..
    // ✨중요!!✨
    // 리액트 상태에서 객체를 수정해야 할 때에는,
    // 아래와 같이 기존 상태를 직접 수정해서 set함수에 넣으면 안됨
    // 
    // inputs[name] = inputValue; // 변수를 가져올 땐 대괄호 표기법
    // setInputs(inputs);
    // => inputs가 가리키는 객체의 내부 데이터만 바뀐것이지 주소값(창조값)은 변하지 않았기 떼문

    // 그 대신 새로운 객체를 만들어서 변화를 주고 이를 상태로 사용해야 함.
    // 이러한 작업을 리액트에선 전문용어로 "불변성을 지킨다"라고 부른다.(기존 객체는 변경하지 않는다)
    // 불변성을 지켜주어야 리액트 컴포넌트에서 상태가 업데이트 됐음을 감지할 수 있고 이에 따라 재렌더링이 진행됨

    //올바른 방법 01 - 차근차근 방법 <- ㄹㅇ 샘이 이렇게 쓰셨음
    // const copyInputs = {
    //   ...inputs
    // };

    // copyInputs[name] = inputValue;
    // setInputs(copyInputs);
    // 잊지말고 set함수에 다시 값을 넣어줘야함

    // 올바른 방법 02- 코드 단축 버전
    setInputs({
      ...inputs,
      [name]:inputValue
    });

    // 결론 : 리액트 상태에서 객체를 업데이트 할 때에는 기존 객체를 직접 수정하면 안되고
    // 새로운 객체(기존 객체의 복사본)을 만들고 그 객체에 변화를 주고
    // 마지막으로 set 함수에 넣어줘야함
    // 새로운 객체(기존 객체의 복사본) <- 당연한 말임
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`조식여부 : ${breakfast}, 투숙객 수: ${numberOfGuest}, 룸 타입: ${roomType}`)
  };

  // 여러 입력 양식을 제어해야할 때, 각 엘리먼트에 name 속성을 추가하고
  // event.target.name 값을 통해 어떤 입력 양식인지 구분할 수 있게 해줌
  // 그리고 useState에서는 기본 타입의 값이 아니라 객체 형태의 상태를 관리

  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식여부 :
        <input type="checkbox" 
        name="breakfast" // name속성 추가
        checked = {breakfast}
        onChange={handleInputChange}
        />
      </label>

      <br />

      <label>
        투숙객 수 : 
        <input type="number" 
        value={numberOfGuest}
        name="numberOfGuest"
        onChange={handleInputChange}
        />
      </label>
      
      <br />

      {/* 라디오 타입은 name속성을 그룹을 위해 넣어주시기 위해서 미리 넣었기 때문에 이벤트 이름만 동일하게 변경해주면 됨 */}
      룸 타입 : 
      <label>
        <input type="radio" 
        name="roomType"
        value = "SINGLE"
        checked={roomType === 'SINGLE'}
        onChange={handleInputChange}
        />
        싱글
      </label>
      <label>
        <input type="radio" 
        name="roomType"
        value = "DOUBLE"
        checked={roomType === 'DOUBLE'}
        onChange={handleInputChange}
        />
        더블
      </label>
      <label>
        <input type="radio" 
        name="roomType"
        value = "TWIN"
        checked={roomType === 'TWIN'}
        onChange={handleInputChange}
          />
        트윈
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default ReservationRefactoring;