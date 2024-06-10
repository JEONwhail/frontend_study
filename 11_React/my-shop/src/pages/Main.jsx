// Main.js

import styled from "styled-components";
import minggomanggo from "../images/minggomanggo.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/product/productSlice'; // 경로를 실제 파일 경로로 수정하세요

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${minggomanggo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

function Main() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.productList);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/your-username/your-repo/products'); // 실제 경로로 수정하세요
        dispatch(getAllProducts(response.data));
      } catch (error) {
        console.error("Failed to fetch products: ", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackground />
      </section>

      {/* 상품 목록 섹션 */}
      <section>
        <Container>
          <Row>
            {products.map(product => (
              <Col key={product.id} md={4} sm={6}>
                <img src={product.image} width="80%" alt={product.name} />
                <h4>{product.name}</h4>
                <p>{product.price}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;

// 가짜(Fake) API 서버 만들기
// 실무와 비슷한 느낌으로 하기 위해 가짜(Fake) API 서버를 만들거임

// 1. json-server (혼자 CRUD 연습하기 좋음)
// 이 도구를 사용하면 json 파일 하나만 있으면 로컬에 연습용 서버를 쉽게 구성 할 수 있음
// (즉, 사용하려는 컴퓨터에서 매번 로컬 서버를 띄워야 함)

// json-server 사용법
// ./src/data.json 이라는 파일을 작성
// npx json-server ./src/data.json --port 4000
// 또는 
// npm i -g json-server
// json-server --watch ./src/data.json --port 4000

// 더 자세한 사용법 참고
// https://github.com/typicode/json-server
// https://redux-advanced.vlpt.us/3/01.html

// 2. My JSON Server (Read만 가능)
// 이 서비스를 사용하면 GitHub와 연동하여 연습용 서버를 쉽게 구성 할 수 있음

// My JSON Server 사용법
// GitHub에 저장소 생성(<your-username>/<your-repo>)
// db.json파일 만들기
// 서버에 액세스하려면 https://my-json-server.typicode.com/<
