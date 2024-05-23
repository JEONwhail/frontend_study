import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartComponent from './components/StartComponent';
import MainComponent from './components/MainComponent';
import CategoryPage from './components/CategoryPage';
import FinishComponent from './components/FinishComponent';
import './App.css';

const App = () => {
  const loadTodos = () => {
    try {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (e) {
      return [];
    }
  };

  const loadCompletedTodos = () => {
    try {
      const savedCompletedTodos = localStorage.getItem('completedTodos');
      return savedCompletedTodos ? JSON.parse(savedCompletedTodos) : [];
    } catch (e) {
      return [];
    }
  };

  const [todos, setTodos] = React.useState(loadTodos);
  const [completedTodos, setCompletedTodos] = React.useState(loadCompletedTodos);

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartComponent />} />
          <Route path="/main" element={<MainComponent todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />} />
          <Route path="/category/:category" element={<CategoryPage todos={[...todos, ...completedTodos]} />} />
          <Route path="/finish" element={<FinishComponent todos={completedTodos} setCompletedTodos={setCompletedTodos} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
