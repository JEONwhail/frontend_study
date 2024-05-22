import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OtherComponent = () => {
  const [completedList, setCompletedList] = useState([]);

  useEffect(() => {
    const savedCompletedList = JSON.parse(localStorage.getItem('completedList')) || [];
    setCompletedList(savedCompletedList);
  }, []);

  return (
    <div className="component">
      <h2>완료된 To Do List</h2>
      {completedList.length === 0 ? (
        <p>완료된 리스트가 없습니다.</p>
      ) : (
        completedList.map((post) => (
          <div key={post.id} className="todo-item">
            <span>{post.text}</span>
            <span className="date">{post.date}</span>
            <span>완료성공💪</span>
          </div>
        ))
      )}
      <Link to="/">
        <button className="todo-button">뒤로 돌아가기</button>
      </Link>
    </div>
  );
};

export default OtherComponent;