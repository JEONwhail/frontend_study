//querySelector('css선택자')
//HTNL에서 ㅎ패당 요소를 검샥하며 찾ㅇㄴ 첫버ㅉ 요소 하나만 바환
// 요소를 찾지 ㅁㅎㅅ허묜 null울 ㅂㅏㄴ환한다
// const boxEl = document.querySelector('.box');

console.log(boxEl);

//요소에 이벤트 리스너 등록하기
//이벤트 : 마우스(클릭,더블클릭 등등), 스크롤(스크롤), 키보드(키다운, 키업)
//addEventListener() 메소드 : 
//해당 요소에 지정한 이벤트(Event)가 발생하는지 듣고(Listen) 있다가 실제 이벤트가 발생하면 연결된 콜백 함수(Handler)를 실행
boxEl.addEventListener('click', function () {
  console.log('Click!!');

  //classlist속성 : 요소의 HTML class 속성에 대한 제어 명령이 포함

  //추가하기
  boxEl.classList.add('active'); //요소에 active라는 클래스 추가

  //확인하기
  let hasActive =  boxEl.classList.contains('active'); //요소에 active라는 클래스가 있는지 확인
  console.log(hasActive);

  //제거하기
  boxEl.classList.remove('active');
  hasActive = boxEl.classList.contains('active');//요소에 active라는 클래스가 있으면 제거
  //요소에 active라는 클래스가 있으면 제거
  console.log(hasActive);

});
//활용 예 : active라는 클래스에 미리 스타일이 지정하고 클릭한 특정 요소에 적용할때