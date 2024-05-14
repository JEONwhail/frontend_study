import styled from "styled-components";
// Tip : as를 사용허여 별칭을 붙여 사용하면 추후 아이콘 바꿀 때 한곳만 되서 편함
import { MdAdd as AddIcon } from "react-icons/md";
import { useState } from "react";

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #51fab9;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1; // 버튼을 제외한 영역을 모두 차지하기
  &::placeholder{
    color: #014b22;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #014d2d;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover{
    background: #41f592;
  }
`;

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리
function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const handleChange =(e) =>{
    setValue(e.target.value);
  };

  const onInserts = (e) =>{
    e.preventDefault();

    // 유효성 검사 추가
    if (!value) {
      alert('무엇을 할지 내용 입력');
      return; // 함수종료
    }

    onInsert(value);
    setValue('');
  };

  return (
    <TodoInsertWrapper onSubmit={onInserts}>
      <StyledInput 
      type = "text" 
      value={value} 
      placeholder="너 할 일이 있지 않으까?"
      onChange={handleChange} 
      />
      <StyledButton type = "submit">
        <AddIcon/>
      </StyledButton>
    </TodoInsertWrapper>
  );
};

export default TodoInsert;