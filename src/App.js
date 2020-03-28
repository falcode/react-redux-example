import './App.css';
import React from 'react';
import logo from './logo.svg';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message'


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to React with Redux by <a className="App-link" href="https://github.com/falcode">Falcode</a></p>
      </header>
      <div className="Todo-App">
        <Message message='hello'/>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App
