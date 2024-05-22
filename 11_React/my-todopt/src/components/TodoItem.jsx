import React, { useState } from 'react';

const TodoItem = ({ post, onFavoriteToggle, onComplete, onDelete, onEdit, editingPost, setEditingPost }) => {
  const [newText, setNewText] = useState(post.text);

  const handleEditClick = () => {
    if (editingPost === post.id) {
      onEdit(newText);
    } else {
      setEditingPost(post.id);
    }
  };

  return (
    <div className="todo-item">
      <span>{post.icon}</span>
      {editingPost === post.id ? (
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <span>{post.text}</span>
      )}
      <span className="date">{post.date}</span>
      <span className="actions">
        <span onClick={onFavoriteToggle}>{post.icon === '☆' ? '📌' : '☆'}</span>
        <span onClick={handleEditClick}>✏️</span>
        <span onClick={onComplete}>✔️</span>
        <span onClick={onDelete}>🗑️</span>
      </span>
    </div>
  );
};

export default TodoItem;