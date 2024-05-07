import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// POST CRUD만들기
//CRUD -> 앱을 만들때 가장 기본적인 구성
// C: Create(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D:Delete(삭제)

function App() {
  // 서버에서 가져온 데이터라고 가정
  const [posts, setPosts] = useState(['리액트 잘쓰려면?', '자바스크립트 핵심 문법', 'CSS 스타일링 가이드']);

  return (
    <>
      <header className="header--dark">
        <h4>JEON LOG</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>
      
      <div className="inner">
        {/* 포스트 목록 */}

        <div className='list'>
          <h4> {posts[0]} </h4>
          <p>2024년 05월 07일</p>
          <p>by JEON</p>
        </div>

        <div className='list'>
          <h4> {posts[1]} </h4>
          <p>2024년 05월 07일</p>
          <p>by JEON</p>
        </div>

        <div className='list'>
          <h4> {posts[2]} </h4>
          <p>2024년 05월 07일</p>
          <p>by JEON</p>
        </div>

        {/* Quiz: map() 함수를 이용해서 posts 반복 렌더링 하기 */}

        {posts.map((post, index) => (
          <div key={index} className='list'>
            <h4> {post} </h4>
            <p>2024년 05월 07일</p>
            <p>by JEON</p>
          </div>
        ))}

      </div>
    </>
  );
}

export default App;
