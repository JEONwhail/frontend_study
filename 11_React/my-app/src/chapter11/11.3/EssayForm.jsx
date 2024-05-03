import { useState } from "react";

function EssayForm() {
  const [value, setValue] = useState('가장 좋아하는 것에 대한 에세이를 작성하세요.');


  // set함수로 이용해서 사용자가 입력한 값을 나오게 코드 작성하기(test)
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('제출된 에세이 : ' + value);
    // 새로고침 막기(test)
    event.preventDefault();
  };

  return (
    // submit에서 이벤트는 form태그에서 감지할 ㅜㅅ 있음
    <form onSubmit={handleSubmit}>
      <label>
        에세이 :
        <textarea value={value} onChange={handleChange} cols="30" rows="10"></textarea>
        {/* HTML DOM */}
        {/* <textarea>
            Hello~~world! !
        </textarea> */}
        {/* 한번 확인 용 */}
        <button type="submit">제출하시길</button>
      </label>
    </form>
  );
};

export default EssayForm;