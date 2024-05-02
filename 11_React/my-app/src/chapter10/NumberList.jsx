const numbers = [1,2,3,4,5,6,7,8,9,10];

// 자바스크립트의 일반 배열을 리액트로 변경한 것

function NumberList() {
  // 배열의 반복 렌더링 할 때는 key 속성을 필수로 넣어야 함
  // 임시로 배열의 insex를 넣어 key누락 문제를 해결
  const listItem = numbers.map((number, index) => {
    // return <li> {number} </li> // 워닝 메시지 뜸
    // Warning: Each child in a list should have a unique "key" prop
    return <li key={index}> {number} </li> //워닝 메시지 안뜸
  });

  return (
    <>
    {/* 첫번째 방식 */}
    <ul>
      {listItem}
    </ul>

    {/* 두번째 방식 */}
    <ul>
    {numbers.map((number, index) => {return <li key={index}> {number} </li>;
      })}
    </ul>


    </>
  );
};

export default NumberList;
// 실무에서는 key값에 index넣으면 그거에 대한 문제도 있ㅇㅁ