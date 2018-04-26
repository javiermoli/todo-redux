import TodoList from '../components/todoList'
import { connect } from 'react-redux'
import { completedTodo, todoIsDoing, removeTodo }  from '../actions/actionsCreators'

const visibleTodos = (todos, stateFilter) => {
  console.log(stateFilter);
  console.log(todos);

  if(stateFilter.filter === 'SHOW_ALL') {
    return todos
  } else if (stateFilter.filter === 'SHOW_COMPLETED') {
    return todos.filter(todo =>todo.doing===4 )
  } else if (stateFilter.filter === 'SHOW_ACTIVE') {
    return todos.filter(todo => todo.doing ===2 )
  } else if (stateFilter.filter === 'SHOW_DOING') {
    return todos.filter(todo => todo.doing ===3 )
  }
}

const mapStateToprops = (state) => ({
  todos: visibleTodos(state.todos, state.changeVisibleTodo)
})

const mapDispatchToProps = dispatch => ({
  todoIsDone: id => dispatch(completedTodo(id)),
  todoIsDoing: id => dispatch(todoIsDoing(id)),
  removeTodo: id=> dispatch(removeTodo(id))
})


export default connect(mapStateToprops, mapDispatchToProps)(TodoList)
