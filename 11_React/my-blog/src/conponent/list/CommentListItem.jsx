import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  background: #dafddb;
  cursor: pointer;

  &:hover {
    background: #88f191;
  }
`;

function CommentListItem() {
  return (
    <>
    </>
  );
};

export default CommentListItem;