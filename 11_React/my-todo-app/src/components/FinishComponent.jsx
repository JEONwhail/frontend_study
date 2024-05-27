import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const FinishComponent = ({ font, todos, setTodos, setCompletedTodos }) => {
  const navigate = useNavigate();
  const completedTodos = todos.filter(todo => todo && todo.done);

  const handleDelete = (index) => {
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos.splice(index, 1);
    setCompletedTodos(newCompletedTodos);
  };

  return (
    <div className="finish-container" style={{ fontFamily: font }}>
      <h2>🍀 To Do List를 이만큼이나 완료했어요! 🍀</h2>
      {completedTodos.length > 0 ? (
        completedTodos.map((todo, index) => (
          <div key={index} className="todo-item" style={{ textDecoration: 'line-through', width: '30%' }}>
            <div className="todo-item-top">
              <span className="category">{todo.category}</span>
              <span className="task">{todo.task}</span>
              <span>
                <button onClick={() => handleDelete(index)}>❌</button>
              </span>
            </div>
            <div className="todo-item-bottom">
              <span>완료일: {new Date(todo.completedDate).toLocaleDateString()}</span>
            </div>
          </div>
        ))
      ) : (
        <p>완료된 To Do List가 없습니다😢</p>
      )}
      <button onClick={() => navigate('/main')} className="back-button">
        To Do List로 돌아가기
      </button>
    </div>
  );
};

export default FinishComponent;
