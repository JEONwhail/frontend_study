import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartComponent from './components/StartComponent';
import MainComponent from './components/MainComponent';
import CategoryPage from './components/CategoryPage';
import FinishComponent from './components/FinishComponent';
import './App.css';

const App = () => {
  const loadFromLocalStorage = (key, defaultValue = []) => {
    try {
      const savedData = localStorage.getItem(key);
      return savedData ? JSON.parse(savedData) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  };

  const [todos, setTodos] = React.useState(() => loadFromLocalStorage('todos'));
  const [completedTodos, setCompletedTodos] = React.useState(() => loadFromLocalStorage('completedTodos'));

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
          <Route path="/category/:category" element={<CategoryPage todos={[...todos, ...completedTodos]} setTodos={setTodos} setCompletedTodos={setCompletedTodos} />} />
          <Route path="/finish" element={<FinishComponent todos={completedTodos} setCompletedTodos={setCompletedTodos} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
