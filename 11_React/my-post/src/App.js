import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PostDetail from './components/PostDetail';

// POST CRUD만들기
//CRUD -> 앱을 만들때 가장 기본적인 구성
// C: Create(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D:Delete(삭제)

function App() {
  // 서버에서 가져온 데이터라고 가정
  const [posts, setPosts] = useState(['리액트 잘쓰려면?', '자바스크립트 핵심 문법', 'CSS 스타일링 가이드']);


  const [showPostDetail, setShowPostDetail] = useState(false);
  
  // 고유한 아이디값이 없기에 인덱스로 연결시킴 
  const [currentIndet, setCurrentIndet] = useState(null);

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
        {/* 하드코딩 ver */}
        {/* 
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
        </div> */}

        {/* Quiz: map() 함수를 이용해서 posts 반복 렌더링 하기 */}

        {posts.map((post, index) => (
          <div key={index} className='list'
          onClick={()=>{
            setShowPostDetail(true);
            setCurrentIndet(index); //아이디값이 없으니 index로 대신함.
          }}>
            <h4> {post} </h4>
            <p>2024년 05월 07일</p>
            <p>by JEON</p>
          </div>
        ))}

        {/* 포스트 상세보기 */}
        {/* Quiz 조건부 렌더링으로 list 클릭했을 때 showPostDetail이 true로 바뀌고 true로 바뀌면 화면에 나오도록 */}
        {showPostDetail && <PostDetail posts={posts}
        currentIndex={currentIndet} />}

        {/* Quiz 제목 가져오기 */}



      </div>
    </>
  );
}

export default App;
