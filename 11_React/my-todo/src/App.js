import { createGlobalStyle} from "styled-components";
import reset, { Reset } from "styled-reset"
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";
import TodoList from "./components/TodoList";
import { useRef, useState } from "react";

// 패키지 설치
// npm install styled-components styled-reset react-icons

// 글로벌(공통) 스타일 적용과 reset css적용
// createGlobalStyle을 이용하여 글로벌 스타일 컴포넌트를 만들고 가장 첫번째로 렌더링 하면 됨

const GlobalStyle = createGlobalStyle`
/* reset css */
${reset}
/* 글로벌(공통) 스타일 */
body {
  background: #cae9bb;
}
`;
function App(props) {
  // todos 배열 안에 객체 형태로 데이터가 존재
  // id, 내용, 완료 여부
  // TodoList애 props로 전달
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '끝내주는 잠 못자기',
      done: true
    },
    {
      id: 2,
      text: '끝내주는 밥 먹기',
      done: true
    },
    {
      id: 3,
      text: '밍고 껴안기',
      done: true
    },
  ]);

  // 새 객체를 만들 때 마다 id값에 1씩 더해줘야 하는데
  // id값은 렌더링되는 정보가 아님
  // 단순히 새로운 항목을 만들 때 참조되는 값임
  // useRef()를 사용하여 변수 생성
  const nextId = useRef(4);



  // todos배열에 새 할 일 객체를 추가하기 위한 함수
  const handleInsert = (text) => {
    const todo ={
      id : nextId.current,
      text,
      done:false
    };

    // 방법1
    // const copyTodos = [...todos];
    // copyTodos.push(todo);
    // setTodos(copyTodos); // 새로운 배열을 만들어 넣어줌

    // (편법)
    setTodos([...todos, todo]);

    // 방법2 - 배열의 내장함수이용
    setTodos(todos.concat(todo))



    nextId.current += 1; // nextId에 1씩 더하기
  };

  // todos 배열에서 id값으로 항목을 지우기 위한 함수
  const handleRemove = (id) => {
  //   // 방법1
  // const copyTodos = [...todos];
  // const targetIndex = todos.findIndex(todo=> todo.id === id);
  // copyTodos.splice(targetIndex, 1);
  // setTodos(copyTodos)

  // 방법2
  // 배열의 내장 함수 이용
  setTodos(todos.filter(todo => todo.id !== id));
  };
  

  return (
    <>
      {/* 둘 중 하나만 해도 됨(reset) */}
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert} />
        <TodoList todos={todos} onRemove={handleRemove} />
        {/* <div>투두 목록</div> */}
      </TodoTemplate>
    </>
  );
}

export default App;
