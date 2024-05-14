import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px; // 57 px * 9개 항목
  overflow-y: auto;
`;

// todos 배열을 props로 받아와서 map()함수를 사용해 여러개의 TodoListItem컴포넌트로 변환해 보여줌
function TodoList( { todos, onRemove } ) { // 이렇게도 구조분해할당 가능
  // const { todos } = props;

  return (
    <TodoListWrapper>
      {todos.map(todo => {
        return <TodoListItem key={todo.id} todo={todo} onRemove={onRemove}/>
      })}
    </TodoListWrapper>
  );
};

export default TodoList;