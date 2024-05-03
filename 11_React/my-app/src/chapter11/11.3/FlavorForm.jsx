import { useState } from "react";

function FlavorForm() {

  const [value, setValue] = useState('coconut');

  const hanndleChang = (e) => {
    setValue(e.target.value)
  };
  const handleSubmit = (e) => {
    alert('가장 좋아하는 맛 : ' + value)
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        좋아하는 맛 선택 : 
        <select value={value} onChange={hanndleChang}>
          {/* onChange={hanndleChang}를 안넣었을 경우, 다른 과일을 선택해도 코코넛만 확인 됨.변경되는 것도 이벤트가 터지는 거라 onChange={} 넣어줘야함 */}
          <option value="grapefruit">자몽</option>
          <option value="lime">라임</option>
          <option value="coconut">코코넛</option> 
          <option value="mango">망고</option>
        </select>
        {/* HTML DOM */} 
        {/* <select>
          <option value="grapefruit">자몽</option>
          <option value="lime">라임</option>
          <option value="coconut" selected>코코넛</option>  */}
          {/* selected를 쓰면 코코넛 선택
          <option value="mango">망고</option>
        </select> */}
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default FlavorForm;