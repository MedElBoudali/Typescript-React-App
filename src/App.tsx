import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  const todoAddHandler = (text: string) => {
    // instead of
    // setTodos([...todos, { id: Math.random().toString(), text }]);
    // we can use this (supported in react)
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text }]);
  };

  return (
    <div className='App'>
      <NewTodo addTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
