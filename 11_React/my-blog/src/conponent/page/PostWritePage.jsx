import styled from "styled-components";
import TextInput from "../ui/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	width: 100%;
	max-width: 720px;

	& > *:not(:last-child) {
		margin-bottom: 16px;
	}
`;


function PostWritePage() {
  // 글의 제목과 내용울 위한 state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate =  useNavigate
  return (
    <Wrapper>
      <Container>
        {/* 글 제목 입력 */}
        <TextInput
        height ={20}
        value={title}
        onChange={(e)=> setTitle(e.target.value)}

        />
        {/* 글 내용 입력 */}
        <TextInput
        height ={20}
        value={content}
        onChange={(e)=> setContent(e.target.value)}
        />
        {/* 글 등록 입력 */}
        <Button 
        title= "글 등록"
        onChange={()=> navigate('/')}/>

      </Container>
    </Wrapper>
  );
};

export default PostWritePage;