// 상품과 관련된 api 요청 함수들을 정의
// 가독성도 좋고 여러 곳에서 재사용 할 수 있도록 함수로 만듦.

import axios from "axios";

// 전체 상품 목록 조회

// 특정 상품 조회


// 상품 더보기
export const getMoreProducts = async () =>{
  try {
    const response =  await axios.get('https://my-json-server.typicode.com/JEONwhail/db-shop/more-products');

    if(response.status === 200){ //응답 코드가 200 OK일때만 결과를 리턴
      return response.data;
    } else{
      throw new Error(`api error : ${response.status} ${response.statusText}`);
    }
  } catch (error) { //서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
  }
};


// 원래는 api 요청 함수들은 따로 빼주는게 좋음.