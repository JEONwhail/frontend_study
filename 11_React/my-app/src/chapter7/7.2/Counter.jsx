import React, { useState } from 'react';

function Counter(props) {

// state를 사용해서 값이 바뀔때마다 재렌더링이 되도록 해야함
let [count, setCount] = useState(0); // state 의 초기값 0 
  console.log(useState(0));
// useState()의 결과로 배열이 반환됨 -> [초기값,상태변경함수]
// 배열의 구조 분해 할당을 사용하여 변수 선언 및 할당


// 글자색 퀴즈
  // const ColorChanger = () => {
  //   const [color, setColor] = useState('blue');

  //   const changeColor = () => {
  //     const newColor = 'pink';
  //     setColor(newColor);
  //   };

  // const [colored,setColor] = useState('blue'); // 글자색 상태
  // 랜덤 색상변경하기
  const ColorChanger = () => {
    const [colored, setColor] = useState('blue');
  
    const getRandomColor = () => {
      const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return randomColor;
    };


  const [goodok,setGoodok] = useState('구독'); // 글자변경


  // state미사용 시
  let wrongCount = 0;



  return (
    <>
      <p>총 {count}번 클릭했습니다</p>
      {/* 1. state 직접 수정 */}
      {/* 직접 count state를 증가시키면 값은 증가되지만 재 렌더링이 일어나지 않음 */}
      <button 
      type='button' 
      onClick={() =>{
        count++;
        console.log(count);
      }}
      >
        클릭 (잘못된 방법)
      </button>


      <br />

      {/* 2. state 직접 수정 */}
      <button 
      type='button' 
      onClick={() =>{
        setCount(count +1);
        console.log(count);

      }}
      >
        클릭
      </button>

      {/* 3. state 미사용 */}
      {/* 값은 증가되지만 재렌더링이 일어나지 않음 */}
      {/* 다른 이유로 재 렌더링이 발생 시, 값이 초기화 됨 */}
      <p>총 {wrongCount} 번 클릭 했습니다</p>
      <button 
      type='button' 
      onClick={() =>{
        wrongCount++;
        console.log(wrongCount);

      }}
      >
        클릭(잘못된방법)
      </button>

      <br />

      {/* 글자 색상 바꾸는 거 랜덤으로 바꾸는 거 해보기 */}
      {/* Quiz 글자색 바꾸기, 버튼 내용 바꾸기 */}
      {/* state사용 */}
      {/* <p style={{ color:colored }}>현재 글자색: {colored} </p>
      <button onClick={() => {
        setColor('red');
      }}>글자색 변경</button> */}

      <p style={{ color: colored }}>현재 글자색: {colored}</p>
      <button onClick={() => setColor(getRandomColor())}>글자색 랜덤 변경</button>

      {/* <button onClick={() => {
      setColor(prevColor => prevColor === 'blue' ? 'red' : 'blue');
      }}>글자색 변경</button> */}

      <p>버튼 내용 바꾸기 </p>
        <button onClick={() => setGoodok(!setGoodok)}> {setGoodok ? '구독완료' : '구독'} </button>

    </>
  );
}
}

export default Counter;