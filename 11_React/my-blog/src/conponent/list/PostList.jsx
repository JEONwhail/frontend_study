import styled from "styled-components";
import PostItemList from "./PostItemList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

// map()함수를 이용해서 PostItemList를 반복 렌더링하는 컴포넌트
function PostList({ posts }) {
  return (
    <Wrapper>
      {posts.map(post => (
        <PostItemList key={post.id} post={post} />
      ))}
    </Wrapper>
  );
};

export default PostList;