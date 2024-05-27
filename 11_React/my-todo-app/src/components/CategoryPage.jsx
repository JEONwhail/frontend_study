import React from 'react';
import { useParams } from 'react-router-dom';
import AddTodoComponent from './AddTodoComponent';
import '../App.css';

const CategoryPage = ({ todos, setTodos, completedTodos, setCompletedTodos, font }) => {
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

  const handleEdit = (index, newTask, newDeadline) => {
    if ((newTask === null || newTask.trim() === '') && (newDeadline === null || newDeadline.trim() === '')) return;
    const newTodos = todos.map((todo, todoIndex) => {
      if (todo.category === decodedCategory && todoIndex === index) {
        if (newTask) todo.task = newTask;
        if (newDeadline) todo.deadline = newDeadline;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, category: decodedCategory, date: new Date().toISOString() }]);
  };

  return (
    <div className="category-page" style={{ fontFamily: font }}>
      <h2>{decodedCategory} 카테고리</h2>
      <div className="main-content">
        <div className="main-component">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo, index) => (
              <div key={index} className="todo-item">
                <div className="todo-item-top">
                  <span>{todo.task}</span>
                  <span>{todo.deadline || '없음'}</span>
                  <span>
                    <button onClick={() => handleFavorite(index)}>📌</button>
                    <button onClick={() => handleComplete(index)}>✔️</button>
                    <button onClick={() => handleDelete(index)}>❌</button>
                    <button onClick={() => handleEdit(index, prompt('수정할 To Do List를 입력하세요:', todo.task), prompt('마감 날짜를 수정하세요 (YYYY-MM-DD):', todo.deadline))}>✏️</button>
                  </span>
                </div>
                <div className="todo-item-bottom">
                  <span>생성일: {new Date(todo.date).toLocaleDateString()}</span>
                </div>
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
