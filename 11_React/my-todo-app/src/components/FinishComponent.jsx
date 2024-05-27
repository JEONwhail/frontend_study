import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const FinishComponent = ({ font, todos, setCompletedTodos }) => {
  const navigate = useNavigate();
  const completedTodos = todos.filter(todo => todo && todo.done);

  const handleDelete = (index) => {
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos.splice(index, 1);
    setCompletedTodos(newCompletedTodos);
  };

  const checkDeadline = (deadline) => {
    if (!deadline) return false;
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = Math.abs(deadlineDate - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 3;
  };

  return (
    <div className="finish-container" style={{ fontFamily: font }}>
      <h2>🍀 To Do List를 이만큼이나 완료했어요! 🍀</h2>
      {completedTodos.length > 0 ? (
        completedTodos.map((todo, index) => (
          <div key={index} className="todo-item">
            <span>{todo.category}</span>
            <span>{todo.task}</span>
            <span>{todo.date}</span>
            <span>{todo.deadline} {checkDeadline(todo.deadline) && '💣'}</span>
            <button onClick={() => handleDelete(index)}>❌</button>
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
