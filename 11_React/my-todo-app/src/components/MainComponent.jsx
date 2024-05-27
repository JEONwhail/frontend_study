import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddTodoComponent from './AddTodoComponent';
import CategoryViewComponent from './CategoryViewComponent';
import '../App.css';

const MainComponent = ({ font, todos, setTodos, completedTodos, setCompletedTodos }) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [newTodos, setNewTodos] = useState(() => {
    const savedNewTodos = localStorage.getItem('newTodos');
    return savedNewTodos ? JSON.parse(savedNewTodos) : [];
  });
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('newTodos', JSON.stringify(newTodos));
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [favorites, newTodos, todos, completedTodos]);

  const handleSort = (option) => {
    setSortOption(option);
    const sortFunction = (a, b) => {
      if (option === 'alphabetical') {
        return a.task.localeCompare(b.task);
      } else if (option === 'recent') {
        return new Date(b.date) - new Date(a.date);
      } else if (option === 'deadline') {
        return new Date(a.deadline) - new Date(b.deadline);
      }
      return 0;
    };

    setTodos([...todos].sort(sortFunction));
    setFavorites([...favorites].sort(sortFunction));
    setNewTodos([...newTodos].sort(sortFunction));
  };

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

  const handleEdit = (index, listType, newTask, newDeadline) => {
    if ((newTask === null || newTask.trim() === '') && (newDeadline === null || newDeadline.trim() === '')) return;
    if (listType === 'todos') {
      const newTodos = [...todos];
      if (newTask) newTodos[index].task = newTask;
      if (newDeadline) newTodos[index].deadline = newDeadline;
      setTodos(newTodos);
    } else if (listType === 'favorites') {
      const newFavorites = [...favorites];
      if (newTask) newFavorites[index].task = newTask;
      if (newDeadline) newFavorites[index].deadline = newDeadline;
      setFavorites(newFavorites);
    } else if (listType === 'newTodos') {
      const newTodosList = [...newTodos];
      if (newTask) newTodosList[index].task = newTask;
      if (newDeadline) newTodosList[index].deadline = newDeadline;
      setNewTodos(newTodosList);
    }
  };

  const handleAddTodo = (newTodo) => {
    const newTodoWithDate = { ...newTodo, date: new Date().toISOString() };
    setTodos([...todos, newTodoWithDate]);
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

  // Merge all todos for CategoryViewComponent
  const allTodos = [...urgentTodos, ...nonUrgentNewTodos, ...nonUrgentTodos, ...nonUrgentFavorites];

  return (
    <div className="main-container" style={{ fontFamily: font }}>
      <div className="header">
        <h1>JEON's To Do List 🍀</h1>
        <div>
          <label>정렬하기:</label>
          <select onChange={(e) => handleSort(e.target.value)} value={sortOption}>
            <option value="">선택</option>
            <option value="alphabetical">가나다 순</option>
            <option value="recent">최근 추가 순</option>
            <option value="deadline">마감일 순</option>
          </select>
        </div>
      </div>
      <div className="main-content">
        <div className="main-component">
          <h2>💣❗긴급긴급❗💣</h2>
          <div className="todo-list">
            {urgentTodos.map((todo, index) => (
              <div key={index} className="todo-item">
                <div className="todo-item-top">
                  <span>{todo.category}</span>
                  <span>{todo.task}</span>
                  <span>
                    <button onClick={() => handleComplete(index, todo.listType)}>✔️</button>
                    <button onClick={() => handleDelete(index, todo.listType)}>❌</button>
                    <button onClick={() => handleFavorite(index, todo.listType)}>📌</button>
                    <button onClick={() => handleEdit(index, todo.listType, prompt('수정할 To Do List를 입력하세요:', todo.task), prompt('마감 날짜를 수정하세요 (YYYY-MM-DD):', todo.deadline))}>✏️</button>
                  </span>
                </div>
                <div className="todo-item-bottom">
                  <span>마감일: {todo.deadline} 💣</span>
                  <span>생성일: {new Date(todo.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <h2>즐겨찾기 목록 📌</h2>
          <div className="todo-list">
            {nonUrgentFavorites.map((todo, index) => (
              <div key={index} className="todo-item">
                <div className="todo-item-top">
                  <span>{todo.category}</span>
                  <span>{todo.task}</span>
                  <span>
                    <button onClick={() => handleFavorite(index, 'favorites')}>☆</button>
                    <button onClick={() => handleComplete(index, 'favorites')}>✔️</button>
                    <button onClick={() => handleDelete(index, 'favorites')}>❌</button>
                    <button onClick={() => handleEdit(index, 'favorites', prompt('수정할 To Do List를 입력하세요:', todo.task), prompt('마감 날짜를 수정하세요 (YYYY-MM-DD):', todo.deadline))}>✏️</button>
                  </span>
                </div>
                <div className="todo-item-bottom">
                  <span>마감일: {todo.deadline || '없음'}</span>
                  <span>생성일: {new Date(todo.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <h2>To Do List</h2>
          <div className="todo-list">
            {nonUrgentTodos.map((todo, index) => (
              <div key={index} className="todo-item">
                <div className="todo-item-top">
                  <span>{todo.category}</span>
                  <span>{todo.task}</span>
                  <span>
                    <button onClick={() => handleFavorite(index, 'todos')}>📌</button>
                    <button onClick={() => handleComplete(index, 'todos')}>✔️</button>
                    <button onClick={() => handleDelete(index, 'todos')}>❌</button>
                    <button onClick={() => handleEdit(index, 'todos', prompt('수정할 To Do List를 입력하세요:', todo.task), prompt('마감 날짜를 수정하세요 (YYYY-MM-DD):', todo.deadline))}>✏️</button>
                  </span>
                </div>
                <div className="todo-item-bottom">
                  <span>마감일: {todo.deadline || '없음'}</span>
                  <span>생성일: {new Date(todo.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="view-completed-button" onClick={handleViewCompleted}>완료된 리스트 확인하기</button>
        </div>
        <div className="sidebar">
          <CategoryViewComponent todos={allTodos} font={font} />
          <AddTodoComponent onAddTodo={handleAddTodo} font={font} />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
