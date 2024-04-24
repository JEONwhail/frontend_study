// 리액트 함수 컴포넌트(지금은 코드 이해X)
// only JS로만 짠 코드(나중에는 JSX 사용)
function LikeButton() {
  const [isClicked, setIsCliked] = React.useState(false);

  return React.createElement(
    'button', // 태그
    { onClick: () => setIsCliked(true) }, // 속성
    isClicked ? 'You liked this' :  'Like' //자식 요소
  );
}

// false 에서 true로 변경될 때 처럼 리액트에서는 상태 변경이라고 함.

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));



