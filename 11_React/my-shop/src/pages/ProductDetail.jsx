import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from "react-bootstrap";
import { getSelectedProduct, selectSelectedProduct } from '../features/product/productSlice';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const selectedProduct = useSelector(selectSelectedProduct);

  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고,
  // 그 결과를 리덱스 스토어에 저장
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
  }, [productId, dispatch]);

  // 존재하지 않는 경우에 대한 예외 처리
  // selectedProduct 에 대해서 하는 거임
  if (!selectedProduct) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <Container className="pt-3">
      <Row>
        <Col md={6}>
          <img src={selectedProduct.imagePath} width="80%" alt={selectedProduct.title} />
        </Col>

        <Col md={6}>
          <h4 className="pt-5">{selectedProduct.title}</h4>
          <p>{selectedProduct.content}</p>
          <p>{selectedProduct.price} 원</p>
          <Button variant="primary">주문하기</Button>{' '}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
