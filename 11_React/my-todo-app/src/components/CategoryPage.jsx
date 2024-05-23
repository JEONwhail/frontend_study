import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const CategoryPage = ({ todos }) => {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const filteredTodos = todos.filter(todo => todo.category === decodedCategory);

  return (
    <div className="category-page">
      <h2>{decodedCategory} 카테고리</h2>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo, index) => (
          <div key={index} className="todo-item">
            <span>{todo.task}</span>
            <span>{todo.date}</span>
            <span>{todo.deadline}</span>
          </div>
        ))
      ) : (
        <p>해당 카테고리에 To Do List가 존재하지 않습니다</p>
      )}
    </div>
  );
};

export default CategoryPage;
