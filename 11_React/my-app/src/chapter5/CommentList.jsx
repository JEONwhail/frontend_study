import React from 'react';
import Comment from './Comment';


const comments =[
  {
    name : '민아짱',
    content : '킹치만~~~'
  },
  {
    name : '압빠',
    content : '아 뭐야 왜저레~~~저리가~~~'
  },
  {
    name : '현아짱',
    content : '집에 보내줘'
  },
]

// 댓글들을 포함하는 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* <Comment />
      <Comment />
      <Comment /> */}

      {/* Quiz : props를 사용하여 name과 content 값 전달(데이터는 자유롭게 작성) */}

      <Comment name='민아짱' content='킹치만~~~' />
      <Comment name='압빠' content='아 뭐야 왜저레~~~저리가~~~' />
      <Comment name='현아짱' content='집에 보내줘' />

      {/* 배열을 동작으로 렌더링해야할 때에는 배열의 map()함수를 사용 */}
      {/* 일반 데이터 배열을 리엑트 엘리먼트로 이루어진 배열로 만들면 됨 */}
      {comments.map((comment, index) => {
        console.log(index, comment);
        return <Comment key={index} name={comment.name} content={comment.content} />;
      })}

      {/* map()함수의 결과 */}

      {/* { 
        [
          <Comment key={0} name='{민아짱'} content={'킹치만~~~'} /> ,
          <Comment key={1} name={'압빠'} content={'아 뭐야 왜저레~~~저리가~~~'} />,
          <Comment key={2} name={'현아짱'} content={'집에 보내줘'} />
        ]
      }  */}

      {comments.map((comment, index) => <Comment key={index} name={comment.name} content={comment.content} />)};


    </div>
  );
}

export default CommentList;