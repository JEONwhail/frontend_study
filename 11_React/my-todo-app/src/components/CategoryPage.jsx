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
        <p>No tasks in this category</p>
      )}
    </div>
  );
};

export default CategoryPage;
