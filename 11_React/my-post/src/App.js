import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PostDetail from './components/PostDetail';

// POST앱 CRUD 만들기
// C: Create(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D: Delete(삭제)

function App() {
  // 서버에서 가져온 데이터라고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?', '자바스크립트 핵심 문법', 'CSS 스타일링 가이드']);  

  const [showPostDetail, setShowPostDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [likeCount, setLikeCount] = useState([0, 0, 0]);
  const [newPost, setNewPost] = useState("");

  const plzLikeCount = (index) => {
    const newLikeCount = [...likeCount];
    newLikeCount[index] += 1;
    setLikeCount(newLikeCount);
  };

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      setPosts([newPost, ...posts]);
      const updatedLikeCount = [...likeCount];
      updatedLikeCount.unshift(0); 
      setLikeCount(updatedLikeCount);
      setNewPost(""); // 입력값 초기화
    }
  };

  const handleClosePostDetail = () => {
    setShowPostDetail(false);
    setCurrentIndex(null);
  };

  // 새로운 ㅊ포스트를 만들때,
  // 현재 날짜로 입력받기
  // ㅇㄴ 제목 옆에 날짜 뜸
  // const handlePostSubmit = () => {
  //   if (newPost.trim() !== "") {
  //     const currentDate = new Date().toLocaleDateString(); 
  //     const newPostWithTitleAndDate = `${newPost} - ${currentDate}`; 
  //     setPosts([newPostWithTitleAndDate, ...posts]);
  //     const updatedLikeCount = [...likeCount];
  //     updatedLikeCount.unshift(0); 
  //     setLikeCount(updatedLikeCount);
  //     setNewPost(""); 
  //   }
  // };

  return (
    <>
      <header className="header--dark">
        <h4>JEONlog</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>

      <div className="inner">
        {/* 포스트 목록 */}
        {/* <div className='list'>
          <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by JEON</p>
        </div>,
        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>2023년 1월 20일</p>
          <p>by JEON</p>
        </div>,
        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2023년 1월 20일</p>
          <p>by JEON</p>
        </div> */}

        {/* Quiz: map()을 이용하여 posts 반복 렌더링하기 */}
        {posts.map((post, index) => {
          return (
            <div key={index} className='list' 
              onClick={() => {
                setShowPostDetail(true);
                setCurrentIndex(index);
              }}
            >
              <h4>{post}</h4>
              <p>2023년 1월 20일</p>
              <p>by JEON</p>
              <hr/>
              <div className='toolbar'>
              <span onClick={(e) => {
                  e.stopPropagation(); // 이벤트 버블링 막기
                  plzLikeCount(index);
                }}> 
                  {likeCount[index] > 0 ? '💖💖💖' : '💚💚💚'} {likeCount[index]} {likeCount[index] > 0 ? '💖💖💖' : '💚💚💚'}
                </span> 
                

                {/* 포스트 삭제하기 */}
                {/* Quiz : 포스트마다삭제 버튼&기능 만들기 */}

                <span style={{fontSize : 27}} onClick={()=>{
                    // div 하나를 직접 제거하는 것 X
                   // posts state에서 제거하면 알아서 자동으로 렌더링

                   // splice사용법
                    // const deletePosts = [...posts];
                    // deletePosts.splice(index, 1); 
                    // setPosts(deletePosts); 

                    // (버그 수정) 삭제시 해당 포스트의 좋아요 카운트도 같이 삭제
                    const deleteLikeCount = [...likeCount];
                    deleteLikeCount.splice(index, 1); 
                    setLikeCount(deleteLikeCount);

                    // 또는 배열의 filter()함수 사용
                    const filteredPosts = posts.filter((value, idx)=>{
                      return index !== idx;
                    });
                    setPosts(filteredPosts);


                    
                  }} >
                  🗑️
                </span>
              </div>
            </div>
          );
        })}

        {/* Quiz : 포스트 등록하기 */}
        {/* 인풋에 제목 입력 후 등록 버튼 누르면 맨 앞에 새로운 포스트 추가 */}
        {/* 1) 인풋을 제어 컴포넌트로 만들어서 사용자가 입력한 값을  state로 저장해서 관리
        2) 등록 버튼 클릭 시 posts 상태의 맨 앞에 새로운 데이터 추가 */}
        {/* 수정사항 : 새로운 게시물이 추가가 되면 이전 like수가 넘어가게 끔 */}
        {/* 어라 NaN이 뜸.... */}
        <div className = "post-form">
          <input 
            type='text' 
            value={newPost} 
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="새로운 포스트 제목을 입력하세요" 
          />
          <button type='button' onClick={handlePostSubmit}>
            포스트 등록
          </button>
        </div>

        {/* 포스트 상세보기 */}
        {/* Quiz: 조건부 렌더링 */}
        {showPostDetail && <PostDetail posts={posts} currentIndex={currentIndex} setPosts={setPosts} handleClosePostDetail={handleClosePostDetail} />}
      </div>
    </>
  );
}

export default App;



