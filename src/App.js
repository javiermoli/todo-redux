import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoForm'
import RenderList from './components/renderList'
import RenderFilters from './components/renderFilters'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoForm/>
        <RenderList/>
        <RenderFilters/>
      </div>
    );
  }
}

export default App;
