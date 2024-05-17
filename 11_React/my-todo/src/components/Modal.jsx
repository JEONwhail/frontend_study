import { Children } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components"; 
//  Background = 화면에 정 가운데에 모달창 뜨고 그 외부분을 누르지 못하는 그런 부분
//  그의 자식으로 모달창을 하나 만들거임
//  스타벅스 할 때 처럼 만들면 됨
// 0517

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  // 정중앙 정렬 공식(인라인이든 블럭이든)
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

// 먼가 감싸는 걸 이름 지을 때 Wrapper, Box, Container
// 이게 관례임
const ModalContainer = styled.div`
  width: 25rem;
  background: #f1f1f1;
  box-shadow: 0px 2px 12px rgba(0,0,0,0.15) ;
  border-radius: 6px;
  overflow-y: auto;

  /* 클래스정의 */
  svg {
    cursor: pointer;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
  }

  hr{
    margin: 0;
    border: 0.5px solid #ccc;
  }

  .body{
    padding: 1.25rem;
    font-style: 1rem;
    line-height: 1.125rem;
  }

  .footer{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 20px;
  }
`

function Modal(props) {
  const{ title , children, onCloseModal, onEdit } = props
  // 모든 부분을 props로 받아올거임

  return (
    <Background>
      <ModalContainer>

        <div className="header">
          <span className="modal-title">{title}</span>
          {/* 자동완성으로 아이콘 넣기 임포트 확인 */}
          <MdClose onClick={onCloseModal} />
        </div>
        <hr /> 
        {/* 수평선 그리기 */}

        <div className="body">
          {children}
        </div>

        <div className="footer">
          <button type="button" onClick={onEdit}> 확인 </button>
          {/* {cancelBtn && }<button type="button" onClick={undefined}} */}
          {/* 만약 수정할거면 props로 이런식이였나 젠장,,,,  */}
        </div>

      </ModalContainer>
    </Background>
  );
};

export default Modal;