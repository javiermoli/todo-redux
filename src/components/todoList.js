import React from 'react'
import Todo from './todo'
import PropTypes from 'prop-types'

const TodoList = ({todoIsDone, todos, todoIsDoing, removeTodo}) => (
    <ul>
      {todos.map(todo =>
        <Todo key= { todo.id } {...todo}
          isDoing={ () => todoIsDoing(todo.id)}
          finishedTodo= {() => todoIsDone(todo.id)}
          removeTodo= {() => removeTodo(todo.id)}
        />
      )}
    </ul>
  )


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    todoIsDone: PropTypes.func.isRequired
}

export default TodoList
