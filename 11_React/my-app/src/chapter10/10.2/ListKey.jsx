import { useState } from "react";

function ListKey() {

  const [list, setList] = useState(['과제하기','복습하기']);
  const [value, setValue] = useState('');

  const addToList = () => {
    // 잘못된코드
    // 1) 직접 변경 -> 재렌더링이 안일어남
    // list.unshift(value);
    // console.log(list);
    // 2) set 함수 사용 + 변경된 기존 배열 넣기
    // setList(list) // set 함수를 쓴다고 하더라도 기존 배열을 넣어주면 값의 변경을 감지하지 못함

    // 올바른 방법
    // 기존 배열을 복사하여 새로운 배열(새로운 주소값)을 만들어야함
    // setList([value, ...list]); //앞에다가 추가하기
    setList([...list,value]); // 뒤에다가 추가하기

    // Quiz! input에 입력한 이전값 초기화
    setValue('');
  };

  // 리스트 아이템 추가할 때 마다 DOM에 무슨일이 일어나는지 개발자 도구로 확인해보기
  // 키 값이 없으면 추가된 아이템뿐만 아니라 전체가 다 DOM 에 업데이트 됨(비효율적임)
  // 긱 아이템의 키를 추가하지 않았기 때문에 리액트는 어떤 항목이 업데이트 됐는지 알지 못함
  // 100개 1000개 항목이 많아질 수록 성능 저하

  return (
    <>
      {/* 이것도...개발자 규칙인가? e = eve = event */}
      <input type="text" value={value} onChange={(e)=>{setValue(e.target.value);}} /> 
      <button type="button" onClick={addToList}>추가</button>
      <ul>
        {list.map((item,index) => {
          // return<li>  {item}  </li>;
          // return<li key={item}>  {item}  </li>;
          return<li key={index}>  {item}  </li>; // index를 키 값으로 사용하면 고유하지않고 바뀔수도 있음
        })}
      </ul>
    </>
  );
};



// 뒤에다가 추가하기
// function ListKey() {
//   const [text, setText] = useState('');
//   const [list, setList] = useState(['과제하기','복습하기']);
//   const handleChange = (e) => {
//     setText(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim() !== '') {
//       setList([...list, text]);
//       setText('');
//     }
//   };
//   return (
//     <div>
//       <h2>리스트를 추가해주세요</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={text} onChange={handleChange} />
//         <button type="submit">추가하기</button>
//       </form>
//       <ul>
//         {list.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default ListKey;