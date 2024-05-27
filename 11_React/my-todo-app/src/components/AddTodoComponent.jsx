import React, { useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import '../App.css';

const AddTodoComponent = ({ onAddTodo, font }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      task,
      category,
      deadline: deadline ? deadline.toISOString().split('T')[0] : null,
    };
    onAddTodo(newTodo);
    setTask('');
    setCategory('');
    setDeadline(null);
  };

  return (
    <div className="add-todo-component" style={{ fontFamily: font }}>
      <h2>할 일 추가하기</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="카테고리"
          required
        />
        <input
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="할 일"
          required
        />
        <p className='deadline-choice'>마감일을 설정해주세요. (선택사항)</p>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={deadline}
            onChange={(newValue) => setDeadline(newValue)}
            inputFormat="yyyy-MM-dd"
            renderInput={(params) => (
              <TextField {...params} variant="outlined" fullWidth placeholder="마감일" margin="normal" />
            )}
          />
        </LocalizationProvider>
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default AddTodoComponent;
