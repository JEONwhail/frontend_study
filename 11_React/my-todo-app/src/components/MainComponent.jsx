import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddTodoComponent from './AddTodoComponent';
import CategoryViewComponent from './CategoryViewComponent';
import '../App.css';

const MainComponent = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [newTodos, setNewTodos] = useState(() => {
    const savedNewTodos = localStorage.getItem('newTodos');
    return savedNewTodos ? JSON.parse(savedNewTodos) : [];
  });

  React.useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('newTodos', JSON.stringify(newTodos));
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [favorites, newTodos, todos, completedTodos]);

  const handleDelete = (index, listType) => {
    if (listType === 'todos') {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    } else if (listType === 'favorites') {
      const newFavorites = [...favorites];
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
    } else if (listType === 'newTodos') {
      const newTodosList = [...newTodos];
      newTodosList.splice(index, 1);
      setNewTodos(newTodosList);
    }
  };

  const handleComplete = (index, listType) => {
    let completedItem;
    if (listType === 'todos') {
      const newTodos = [...todos];
      completedItem = { ...newTodos[index], done: true };
      newTodos.splice(index, 1);
      setTodos(newTodos);
    } else if (listType === 'favorites') {
      const newFavorites = [...favorites];
      completedItem = { ...newFavorites[index], done: true };
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
    } else if (listType === 'newTodos') {
      const newTodosList = [...newTodos];
      completedItem = { ...newTodosList[index], done: true };
      newTodosList.splice(index, 1);
      setNewTodos(newTodosList);
    }
    setCompletedTodos([...completedTodos, completedItem]);
  };

  const handleFavorite = (index, listType) => {
    if (listType === 'todos' || listType === 'newTodos') {
      const newTodo = listType === 'todos' ? todos[index] : newTodos[index];
      if (!favorites.find(todo => todo.task === newTodo.task)) {
        setFavorites([...favorites, { ...newTodo, favorite: true }]);
      }
      if (listType === 'todos') {
        handleDelete(index, 'todos');
      } else {
        handleDelete(index, 'newTodos');
      }
    } else if (listType === 'favorites') {
      const newFavorite = { ...favorites[index], favorite: false };
      if (!todos.find(todo => todo.task === newFavorite.task)) {
        setTodos([...todos, newFavorite]);
      }
      handleDelete(index, 'favorites');
    }
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleViewCompleted = () => {
    navigate('/finish');
  };

  const checkDeadline = (deadline) => {
    if (!deadline) return false;
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = Math.abs(deadlineDate - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 3;
  };

  const urgentTodos = [...newTodos.map(todo => ({ ...todo, listType: 'newTodos' })), 
                        ...todos.map(todo => ({ ...todo, listType: 'todos' })), 
                        ...favorites.map(todo => ({ ...todo, listType: 'favorites' }))]
                        .filter(todo => checkDeadline(todo.deadline));
  const nonUrgentNewTodos = newTodos.filter(todo => !checkDeadline(todo.deadline));
  const nonUrgentTodos = todos.filter(todo => !checkDeadline(todo.deadline));
  const nonUrgentFavorites = favorites.filter(todo => !checkDeadline(todo.deadline));

  return (
    <div className="main-container">
      <div className="header">
        <h1>JEON's To Do List 🍀</h1>
      </div>
      <div className="main-content">
        <div className="main-component">
          <h2>💣❗긴급긴급❗💣</h2>
          <div className="todo-list">
            {urgentTodos.map((todo, index) => (
              <div key={index} className="todo-item">
                <span>{todo.category}</span>
                <span>{todo.task}</span>
                <span>{todo.deadline} 💣</span>
                <span>
                  <button onClick={() => handleComplete(index, todo.listType)}>✔️</button>
                  <button onClick={() => handleDelete(index, todo.listType)}>❌</button>
                </span>
              </div>
            ))}
          </div>
          <hr />
          {/* <h2>NEW</h2>
          <div className="todo-list">
            {nonUrgentNewTodos.map((todo, index) => (
              <div key={index} className="todo-item">
                <span>{todo.category}</span>
                <span>{todo.task}</span>
                <span>{todo.deadline || '없음'}</span>000
                <span>
                  <button onClick={() => handleFavorite(index, 'newTodos')}>📌</button>
                  <button onClick={() => handleComplete(index, 'newTodos')}>✔️</button>
                  <button onClick={() => handleDelete(index, 'newTodos')}>❌</button>
                </span>
              </div>
            ))}
          </div>
          <hr /> */}
          <h2>즐겨찾기 목록 📌</h2>
          <div className="todo-list">
            {nonUrgentFavorites.map((todo, index) => (
              <div key={index} className="todo-item">
                <span>{todo.category}</span>
                <span>{todo.task}</span>
                <span>{todo.deadline || '없음'}</span>
                <span>
                  <button onClick={() => handleFavorite(index, 'favorites')}>☆</button>
                  <button onClick={() => handleComplete(index, 'favorites')}>✔️</button>
                  <button onClick={() => handleDelete(index, 'favorites')}>❌</button>
                </span>
              </div>
            ))}
          </div>
          <hr />
          <h2>To Do List</h2>
          <div className="todo-list">
            {nonUrgentTodos.map((todo, index) => (
              <div key={index} className="todo-item">
                <span>{todo.category}</span>
                <span>{todo.task}</span>
                <span>{todo.deadline || '없음'}</span>
                <span>
                  <button onClick={() => handleFavorite(index, 'todos')}>📌</button>
                  <button onClick={() => handleComplete(index, 'todos')}>✔️</button>
                  <button onClick={() => handleDelete(index, 'todos')}>❌</button>
                </span>
              </div>
            ))}
          </div>
          <button className="view-completed-button" onClick={handleViewCompleted}>완료된 리스트 확인하기</button>
        </div>
        <div className="sidebar">
          <CategoryViewComponent todos={[...todos, ...newTodos, ...favorites]} />
          <AddTodoComponent onAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
