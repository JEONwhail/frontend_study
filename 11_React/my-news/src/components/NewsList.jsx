import styled from "styled-components";
import {useState, useEffect} from "react";
import axios from "axios";

import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
// 샘플데이터 렌더링 해보기
const sampleArticle = {
  title: '제목',
  description: '내용',
  url:'https://google.com',
  urlToImage:'https://via.placeholder.com/160'
};

// API를 요청하고 뉴스 데이터가 들어있는 배열을 리액트 엘리먼트 배열로 변환하여 렌더링하는 컴포넌트
function NewsList() {
  const [articles, setArticles] = useState([]);

  // NewsList가 화면에 보이는 시점에 API를 요청
  // => useEffect()를 사용하여 컴포넌트가 처음 렌더링 됐을 때 한번만 요청
  // useEffect() 안썼을때 문제점?  api 요청 + set함수에 의한 재렌더링 무한 반복
  // useEffect(() => {
  //   const fetchNewsData = async () =>{
  //     await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=f86a2fc350a74e31b45413db9056eea0');
  //   }
  //   fetchNewsData();
  // }, []);
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=f86a2fc350a74e31b45413db9056eea0');
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };
    fetchNewsData();
  }, []);


  return (
    <NewsListBlock>
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}
      {articles.length === 0 ? (
        <p>No news articles available</p>
      ) : (
        articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))
      )}
    </NewsListBlock>
  );
};

export default NewsList;