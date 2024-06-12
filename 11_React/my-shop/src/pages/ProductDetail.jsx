import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // useParams만 가져옴
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row, Form } from "react-bootstrap"; // Form도 react-bootstrap에서 가져옴
import { clearSelectedProduct, getSelectedProduct, selectSelectedProduct } from '../features/product/productSlice';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import styled, { keyframes } from 'styled-components';
import { toast } from 'react-toastify';

// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용
const highlight = keyframes`
  from { background-color: #00b5dd; }
  50% { background-color: #cff4fa; }
  to { background-color: #00b5dd; }
`;

const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
`;

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const selectedProduct = useSelector(selectSelectedProduct);

  
  const [showAlert, setShowAlert] = useState(true); // 얼랏창 상태 추가
  const [orderCount, setOrderCount] = useState(''); // orderCount 상태 추가

  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고,
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/JEONwhail/db-shop/products/${productId}`);
        dispatch(getSelectedProduct(response.data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductById();

    // 상품 상세페이지가 언마운트 될 때 전역 상태 초기화
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [productId, dispatch]);

  // Alert을 띄우고 3초뒤에 사라지게 만들기
  useEffect(() => {
    setShowAlert(true); // productId가 변경될 때 Alert 초기화
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => clearTimeout(timer); 
  }, [productId]);

  // orderCount 상태 변경 핸들러
  const handleOrderCountChange = (e) => {
    // 숫자 외 입력 시 유효성 검사 후 경고 토스트 띄우기
    if(isNaN(e.target.value)) {
      toast.error('😡😡숫자만 입력하세요!😡😡');
      return;
    }
    setOrderCount(Number(e.target.value));
  };

  // 존재하지 않는 경우에 대한 예외 처리
  if (!selectedProduct) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <Container className="pt-3">
      {showAlert && (
        <StyledAlert variant="success" onClose={() => setShowAlert(false)} dismissible>
          현재 34명이 이 상품을 보고 있습니다.
        </StyledAlert>
      )}
      <Row>
        <Col md={6}>
          <img src={selectedProduct.imagePath} width="80%" alt={selectedProduct.title} />
        </Col>

        <Col md={6}>
          <h4 className="pt-5">{selectedProduct.title}</h4>
          <p>{selectedProduct.content}</p>
          <p>{selectedProduct.price} 원</p>

          <Col md={4} className='m-auto mb-3'>
            {/* Quiz : text input을 제어 컴포넌트로 만들기 */}
            {/* state 이릉은 orderCount로 */}
            <Form.Control
              type="text"
              value={orderCount}
              onChange={handleOrderCountChange}
            />
          </Col>

          <Button variant="primary">주문하기</Button>{' '}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
