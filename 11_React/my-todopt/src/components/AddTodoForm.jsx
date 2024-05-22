import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTodo(text);
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={handleChange}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default AddTodoForm;