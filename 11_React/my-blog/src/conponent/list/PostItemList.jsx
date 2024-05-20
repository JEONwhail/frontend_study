import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  border: 1px solid green;
  border-radius: 8px;
  background: #dafddb;
  cursor: pointer;

  &:hover {
    background: #88f191;
  }
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

// 글의 제목만 표시해주는 컴포넌트
function PostItemList(props) {
  const { post: { id, title } } = props;
  const navigate =  useNavigate();

  return (
    <Wrapper onClick={() => navigate('/post/${id}') }>
      <TitleText>
        {title}
      </TitleText>
    </Wrapper>
  );
};

export default PostItemList;