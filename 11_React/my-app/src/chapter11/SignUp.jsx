// Quiz
// 사용자의 정보를 입력받는 가입 양식 컴포넌트 만들기
// 일단 객체 한번에 묶어버리기

//  (선택 사항)
//  1) form 태그 및 submit 이벤트를 사용해도 되고 button 태그의 click 이벤트를 사용해도 됨
//  2) 각각의 state를 여러 개 만들어도 되고 객체 형태로 한번에 관리해도 됨

import { useState } from "react";

function SignUp() {
  // 1. 이름 입력받기
// 이름을 입력할 수 있는 input 태그와 입력된 값을 저장하기 위한 name이라는 state를 정의(초기값 '')
// 값이 변경되면 이를 처리하기 위한 handleChangeName() 이라는 이벤트 핸들러 정의

// handleChangeName() 쓰기
const [formData, setFormData] = useState({
  name: '',
  gender: '남자'
});

const handleChangeName = (e) => {
  setFormData({ ...formData, name: e.target.value });
};


// 2. 성별 입력받기
// 성별을 입력받기 위한 select 태그와 gender라는 이름의 state를 정의(초기값 '남자')
// select 태그에는 총 두가지 옵션이 들어감(남자, 여자)
// 값이 변경되면 이를 처리하기 위한 handleChangeGender() 라는 이벤트 핸들러 정의


const handleChangeGender = (e) => {
  setFormData({ ...formData, gender: e.target.value });
};

// const handleChange = (e) => {
//   const fieldName = e.target.name;
//   const fieldValue = e.target.value;
//   setFormData({ ...formData, [fieldName]: fieldValue });
// };
// handle로 합쳐진 코드를 시도했지만......
// 이름은 따로 입력하지 못함
// 성별은 선택도 ㅁ못함



// 3. 출력
// 이름과 성별을 입력하고 가입하기 버튼을 누를 시 alert 창으로 입력된 이름과 성별 출력하기

const handleSubmit = (e) => {
  e.preventDefault(); 
  alert(`이름: ${formData.name}, 성별: ${formData.gender}`);
};


  return (
    <form onSubmit={handleSubmit}>

      <label>
        이름:
        <input type="text" value={formData.name} onChange={handleChangeName} />
      </label>

      <br />
      
      <label>
        성별:
        <select value={formData.gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <br />

      <button type="submit">가입하기</button>
      {/* <button onClick={}></button> */}
      {/* 1) form 태그 및 submit 이벤트를 사용해도 되고 button 태그의 click 이벤트를 사용해도 됨 */}
    </form>
  );
};

export default SignUp;

