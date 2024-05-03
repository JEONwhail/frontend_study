import { useState } from "react";

function Reservation() {
  // 여러개의 입력 제어하기 => 여러개의 state선언
  // 다 선언했으면 각각의 제어 컴포넌트를 만들어주면 댐
  const [breakfast , setBreakfast] = useState(false);
  const [numberOfGuest, setNumberOfGuest] = useState(2);
  const [roomType, setRoomType] = useState('SINGLE');


  // 조식여부의 제어 컴포넌트
  // state로 true, false값 제어함
  const handleBreakfastChange = (e) => {
    setBreakfast(e.target.checked);
  };

  // 투숙객수의 제어 컴포넌트
  const handleGuestChange = (e) => {
    setNumberOfGuest(e.target.value)
  };

  // 룸 타입의 제어 컴포넌트 
  // radio는 묶어줬던 친구들에게 동일한 값을 줘야함
  // 변경되는 값이 아닌 동일한 값이 있는 거는 동일하게 줘야함!!
  const handleRoomChange = (e) => {
    setRoomType(e.target.value)
  };

  // 제어 컴포넌트 만들었으면 개발자 도구에서 클릭하면 값 바뀌는 지 확인해보기
  // Components에서 hook 에서 확인하기!

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`조식여부 : ${breakfast}, 투숙객 수: ${numberOfGuest}, 룸 타입: ${roomType}`)
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식여부 :
        <input type="checkbox" 
        checked = {breakfast}
        // checked속성은 checkbox와 radio 타입에 존재하고
        // Boolean 타입의 값
        onChange={handleBreakfastChange}
        />
      </label>

      <br />

      <label>
        투숙객 수 : 
        <input type="number" 
        value={numberOfGuest}
        onChange={handleGuestChange}
        />
      </label>
      
      <br />

      {/* radio 타입은 같은 name으로 묶어줘야하는 특성 기억.... */}
      {/* checkbox와 다른 점은 checkbox는 중복 선택이 가능함 */}
      {/* radio는 중복 선택이 불가함, 그러기 위해서는 같은 네임으로 묶어주기*/}
      룸 타입 : 
      <label>
        <input type="radio" 
        name="roomType"
        value = "SINGLE"
        checked={roomType === 'SINGLE'}
        onChange={handleRoomChange}
        />
        싱글
      </label>
      <label>
        <input type="radio" 
        name="roomType"
        value = "DOUBLE"
        checked={roomType === 'DOUBLE'}
        onChange={handleRoomChange}
        />
        더블
      </label>
      <label>
        <input type="radio" 
        name="roomType"
        value = "TWIN"
        checked={roomType === 'TWIN'}
        onChange={handleRoomChange}
        // 동일한 이벤트 달아주기
        />
        트윈
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default Reservation;