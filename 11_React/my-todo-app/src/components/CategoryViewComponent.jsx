import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CategoryViewComponent = ({ todos }) => {
  const categories = Array.from(new Set(todos.map(todo => todo.category)));

  return (
    <div className="category-view-component">
      <h2>카테고리별 모아보기</h2>
      {categories.map(category => (
        <div key={category} className="category">
          <h3>
            <Link to={`/category/${encodeURIComponent(category)}`}>{category}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryViewComponent;
