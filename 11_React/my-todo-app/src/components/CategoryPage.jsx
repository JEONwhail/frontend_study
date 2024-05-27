import React from 'react';
import { useParams } from 'react-router-dom';
import AddTodoComponent from './AddTodoComponent';
import '../App.css';

const CategoryPage = ({ todos, setTodos, completedTodos, setCompletedTodos, font }) => {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const filteredTodos = todos.filter(todo => todo.category === decodedCategory);

  const handleDelete = (todoId) => {
    const newTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(newTodos);
  };

  const handleComplete = (todoId) => {
    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, done: true, completedDate: new Date().toISOString() };
      }
      return todo;
    });
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, newTodos.find(todo => todo.id === todoId)]);
  };

  const handleFavorite = (todoId) => {
    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, favorite: !todo.favorite };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleEdit = (todoId, newTask, newDeadline) => {
    if ((newTask === null || newTask.trim() === '') && (newDeadline === null || newDeadline.trim() === '')) return;
    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        if (newTask) todo.task = newTask;
        if (newDeadline) todo.deadline = newDeadline;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, category: decodedCategory, date: new Date().toISOString(), id: Date.now() }]);
  };

  return (
    <div className="category-page" style={{ fontFamily: font }}>
      <h2>{decodedCategory} 카테고리</h2>
      <div className="main-content">
        <div className="main-component">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <div key={todo.id} className={`todo-item ${todo.favorite ? 'favorite' : ''}`}>
                <div className="todo-item-top">
                  <span>{todo.task}</span>
                  <span>{todo.deadline || '없음'}</span>
                  <span>
                    <button onClick={() => handleFavorite(todo.id)}>📌</button>
                    <button onClick={() => handleComplete(todo.id)}>✔️</button>
                    <button onClick={() => handleDelete(todo.id)}>❌</button>
                    <button onClick={() => handleEdit(todo.id, prompt('수정할 To Do List를 입력하세요:', todo.task), prompt('마감 날짜를 수정하세요 (YYYY-MM-DD):', todo.deadline))}>✏️</button>
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
