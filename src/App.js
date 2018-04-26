import React, { Component } from 'react';
import TodoForm from './containers/todoForm.js'
import TodoListContainer from './containers/todoListContainer.js'
import FiltersContainer from './containers/filtersContainer.js'
import './App.css'
import HeaderTodo from './components/headerTodo'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm className='item'/>
        <HeaderTodo className='item' title="Todo list">
          <TodoListContainer className='item'/>
        </HeaderTodo>
        <FiltersContainer className='item'/>
      </div>
    );
  }
}

export default App;
