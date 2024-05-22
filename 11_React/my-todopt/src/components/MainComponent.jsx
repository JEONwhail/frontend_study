import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

const MainComponent = () => {
  const [newPosts, setNewPosts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const savedNewPosts = JSON.parse(localStorage.getItem('newPosts')) || [];
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const savedTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
    const savedCompletedList = JSON.parse(localStorage.getItem('completedList')) || [];

    setNewPosts(savedNewPosts);
    setFavorites(savedFavorites);
    setTodoList(savedTodoList);
    setCompletedList(savedCompletedList);
  }, []);

  useEffect(() => {
    localStorage.setItem('newPosts', JSON.stringify(newPosts));
  }, [newPosts]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem('completedList', JSON.stringify(completedList));
  }, [completedList]);

  const handleFavoriteToggle = (post) => {
    if (post.icon === '☆') {
      setFavorites([...favorites, { ...post, icon: '📌' }]);
      setTodoList(todoList.filter((p) => p.id !== post.id));
    } else {
      setFavorites(favorites.filter((p) => p.id !== post.id));
      setTodoList([...todoList, { ...post, icon: '☆' }]);
    }
  };

  const handleComplete = (post) => {
    setCompletedList([...completedList, post]);
    setNewPosts(newPosts.filter((p) => p.id !== post.id));
    setFavorites(favorites.filter((p) => p.id !== post.id));
    setTodoList(todoList.filter((p) => p.id !== post.id));
  };

  const handleDelete = (post) => {
    setNewPosts(newPosts.filter((p) => p.id !== post.id));
    setFavorites(favorites.filter((p) => p.id !== post.id));
    setTodoList(todoList.filter((p) => p.id !== post.id));
  };
  const handleEdit = (post, newText) => {
    if (post.category === 'NEW') {
      setNewPosts(newPosts.map((p) => (p.id === post.id ? { ...p, text: newText } : p)));
    } else if (post.category === 'favorites') {
      setFavorites(favorites.map((p) => (p.id === post.id ? { ...p, text: newText } : p)));
    } else {
      setTodoList(todoList.map((p) => (p.id === post.id ? { ...p, text: newText } : p)));
    }
    setEditingPost(null);
  };

  const handleAddTodo = (text) => {
    const newPost = {
      id: Date.now(),
      text,
      icon: '☆',
      date: new Date().toISOString().split('T')[0],
      category: 'NEW'
    };
    setNewPosts([...newPosts, newPost]);
    setTodoList([...todoList, { ...newPost, category: 'To Do List' }]);
    setShowAddForm(false); // Hide the form after adding todo
  };

  const handleAddTodoClick = () => {
    setShowAddForm(true);
  };

  return (
    <div className="component">
      <div className="header">
        <h2>JEON's</h2>
        <h3>🍀 To Do List 🍀</h3>
      </div>
      <div className="new-posts">
        <h4>NEW</h4>
        {newPosts.map((post) => (
          <TodoItem
            key={post.id}
            post={post}
            onFavoriteToggle={() => handleFavoriteToggle(post)}
            onComplete={() => handleComplete(post)}
            onDelete={() => handleDelete(post)}
            onEdit={(newText) => handleEdit(post, newText)}
            editingPost={editingPost}
            setEditingPost={setEditingPost}
          />
        ))}
      </div>
      <div className="favorites">
        <h4>즐겨찾기 목록 📌</h4>
        {favorites.map((post) => (
          <TodoItem
            key={post.id}
            post={post}
            onFavoriteToggle={() => handleFavoriteToggle(post)}
            onComplete={() => handleComplete(post)}
            onDelete={() => handleDelete(post)}
            onEdit={(newText) => handleEdit(post, newText)}
            editingPost={editingPost}
            setEditingPost={setEditingPost}
          />
        ))}
      </div>
      <div className="todo-list">
        <h4>To Do List</h4>
        {todoList.map((post) => (
          <TodoItem
            key={post.id}
            post={post}
            onFavoriteToggle={() => handleFavoriteToggle(post)}
            onComplete={() => handleComplete(post)}
            onDelete={() => handleDelete(post)}
            onEdit={(newText) => handleEdit(post, newText)}
            editingPost={editingPost}
            setEditingPost={setEditingPost}
          />
        ))}
      </div>
      <div className="buttons">
        <Link to="/finish">
          <button className="todo-button">To Do List 완료 보기</button>
        </Link>
        <button className="todo-button" onClick={handleAddTodoClick}>To Do List 추가하기</button>
      </div>
      {showAddForm && <AddTodoForm onAddTodo={handleAddTodo} />}
    </div>
  );
};

export default MainComponent;