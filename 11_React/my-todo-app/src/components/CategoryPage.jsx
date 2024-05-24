import React from 'react';
import { useParams } from 'react-router-dom';
import AddTodoComponent from './AddTodoComponent';
import '../App.css';

const CategoryPage = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const filteredTodos = todos.filter(todo => todo.category === decodedCategory);

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => todo.category !== decodedCategory || todoIndex !== index);
    setTodos(newTodos);
  };

  const handleComplete = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => todo.category !== decodedCategory || todoIndex !== index);
    const completedItem = { ...filteredTodos[index], done: true };
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, completedItem]);
  };

  const handleFavorite = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todo.category === decodedCategory && todoIndex === index) {
        return { ...todo, favorite: !todo.favorite };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, category: decodedCategory }]);
  };

  return (
    <div className="category-page">
      <h2>{decodedCategory} 카테고리</h2>
      <div className="main-content">
        <div className="main-component">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo, index) => (
              <div key={index} className="todo-item">
                <span>{todo.task}</span>
                <span>{todo.deadline || '없음'}</span>
                <span>
                  <button onClick={() => handleFavorite(index)}>📌</button>
                  <button onClick={() => handleComplete(index)}>✔️</button>
                  <button onClick={() => handleDelete(index)}>❌</button>
                </span>
              </div>
            ))
          ) : (
            <p>해당 카테고리에 To Do List가 존재하지 않습니다</p>
          )}
        </div>
        <div className="sidebar">
          <AddTodoComponent onAddTodo={handleAddTodo} category={decodedCategory} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
