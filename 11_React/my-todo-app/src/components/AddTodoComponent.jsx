import React, { useState } from 'react';

const AddTodoComponent = ({ onAddTodo, category: initialCategory }) => {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const [category, setCategory] = useState(initialCategory || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo({
      task,
      deadline,
      category,
      done: false,
      favorite: false,
    });
    setTask('');
    setDeadline('');
    if (!initialCategory) {
      setCategory('');
    }
  };

  return (
    <div className="add-todo-component">
      <h2>새로운 할 일 추가</h2>
      <form onSubmit={handleSubmit}>
        {!initialCategory && (
          <input
            type="text"
            placeholder="카테고리"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        )}
        <input
          type="text"
          placeholder="할 일"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="마감일"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default AddTodoComponent;
