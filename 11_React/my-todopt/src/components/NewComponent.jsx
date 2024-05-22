import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const NewComponent = ({ onAddTodo }) => {
  return (
    <div>
      <h2>새로운 Todo 추가</h2>
      <AddTodoForm onAddTodo={onAddTodo} />
    </div>
  );
};

export default NewComponent;