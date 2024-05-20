import React, { useState } from 'react';

function PostDetail(props) {
  // 수정 전 const
  const { posts, currentIndex, setPosts, handleClosePostDetail } = props;

  // 👻👻
  const [editMode, setEditMode] = useState(false);
  // 수정 모드 활성화 여부를 관리하는 상태
  // 수정 버튼을 누르면 editMode를 true로 설정하여 수정 모드로 전환
  const [editText, setEditText] = useState(posts[currentIndex].title);
  // 현재 수정 중인 포스트의 제목을 관리하는 상태

  // 👻👻 ㅜ  수정날짜 나오게 수정
  const handleEdit = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const updatedPosts = [...posts];
    updatedPosts[currentIndex] = { 
      ...updatedPosts[currentIndex], 
      title: editText, 
      lastEditDate: currentDate 
    };
    setPosts(updatedPosts);
    setEditMode(false);
  };


  // const handleEdit = () => {
  //   const updatedPosts = [...posts];
  //   updatedPosts[currentIndex].title = editText;
  //   setPosts(updatedPosts);
  //   setEditMode(false);
  // };
  
 // 👻👻
  return (
    <div className = "detail">
      <h4>제목: {posts[currentIndex].title}</h4>
      <p>날짜: {posts[currentIndex].date}</p>
      <p>수정날짜: {posts[currentIndex].lastEditDate || '수정되지 않음'}</p>
      <p>작성자: {posts[currentIndex].author}</p>
      <p>... 상세내용 ...</p>

      {/* 수정 모드에서는 제목을 입력받을 수 있는 input 필드와 저장 버튼 따단 */}
      {editMode ? (
        <>
          {/* 👻👻 ㅜ  수정날짜 나오게 수정 */}
          <input 
            type="text" 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
          />
          {/* <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} /> */}
          <button onClick={handleEdit}>저장</button>
        </>
      ) : (
        <button onClick={() => setEditMode(true)}>수정하기</button>
        // 저장 버튼을 누르면 handleEdit "함수"가 호출되어 포스트의 제목이 업데이트되고, 수정 모드 종료
      )}
      <button onClick={handleClosePostDetail}>닫기</button>
    </div>
  );
};

//         수정 전 코드
//         {/* 간단한 포스트 수정하기 */}
//         <button type="button"
//         onClick={()=>{
//           // 배열이나 객체의 state를 변경하는 법
//           // 새로운 배열 또는 객체를 만들어 변경하고 set함수에 넣어줘야함
//           const copyPosts = [...posts]; //배열의 복사본 만들기
//           copyPosts[currentIndex] = `${copyPosts[currentIndex]} - 수정됨`;
//           setPosts(copyPosts)

//           // state 변경할 때 알아야 할 것!
//           // 1. state 변경 함수의 특징
//           // 기존 state가 신규 state랑 같은 경우, 변경안함
//           // 2. 배열/객체의 특징
//           // 변수에 주소(참조)값이 저장됨
//         }}>
//           수정하기
//         </button>
//         <button onClick={handleClosePostDetail}>닫기</button>
//     </div>
//   );
// };

export default PostDetail;