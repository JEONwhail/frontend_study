import React, { useState } from 'react';
import '../App.css';

const AddTodoComponent = ({ onAddTodo }) => {
  const [category, setCategory] = useState('');
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !task) return;
    if (deadline && new Date(deadline) < new Date().setHours(0, 0, 0, 0)) return;

    onAddTodo({
      category,
      task,
      date: new Date().toISOString().split('T')[0],
      deadline: deadline || null,
      done: false
    });

    setCategory('');
    setTask('');
    setDeadline('');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="add-todo-component">
      <h2>To Do List 추가하기</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="카테고리"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="할 일"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          placeholder="마감일"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          min={today}
        />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default AddTodoComponent;
