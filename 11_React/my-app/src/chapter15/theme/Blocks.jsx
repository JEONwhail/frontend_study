import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  background-color: lightgray;
`;

const Block = styled.div`
  padding: ${props => props.padding};
  border-radius:1rem;
  border: 1px solid black;
  background-color: ${props => props.backgroundColor};
  /* 제발....소문자 대쉬 대문자 헷갈리지마.. */
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  `;

const blockItems = [
  {
    label: '1',
    padding: '1rem',
    backgroundColor: 'red'    
  },
  {
    label: '2',
    padding: '3rem',
    backgroundColor: 'green'    
  },
  {
    label: '3',
    padding: '2rem',
    backgroundColor: 'blue'    
  }

  ];

function Blocks() {
  return (
    <Wrapper>
    {/* Quiz 배열 반복 렌더링 및 스타일링 완성 */}
    {blockItems.map(item => (
      <Block key={item.label} padding={item.padding} backgroundColor={item.backgroundColor}>
        {item.label}
      </Block>
    ))}
  </Wrapper>
  );
};

export default Blocks;