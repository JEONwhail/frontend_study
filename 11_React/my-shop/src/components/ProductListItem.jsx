import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// 방법1 : 스타일드 컴포넌트로 스타일 확장
const StyledCol = styled(Col)`
  cursor: pointer;
`
// 방법2 : GlobalStyle에 공통 스타일로 작성


const ProductListItem = (props) => {

  const { product:{ id, title, price, imagePath } } = props;

  // 숫자포맷 적용
  const formatter = new Intl.NumberFormat('ko-KR', {style:'currency', currency:'KRW'});

  const navigate = useNavigate();

  return (
    // 방법 1
    <StyledCol md={4} sm={6}>
      <img src={imagePath} width="80%" 
      onClick={() => {
        // /detail/해당상품 id
        navigate(`/detail/${id}`);
      } }
      alt={title} />
      <h4>{title}</h4>
      <p>{formatter.format(price)} 원</p>
    </StyledCol>

    // 방법 2
    // <Col md={4} sm={6} className='cursor-pointer'>
    //   <img src={imagePath} width="80%" alt={title} />
    //   <h4>{title}</h4>
    //   <p>{formatter.format(price)} 원</p>
    // </Col>
  );
};

export default ProductListItem;
