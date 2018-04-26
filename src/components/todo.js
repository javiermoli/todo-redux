import React from 'react'

const Todo = ({text, finishedTodo, isDoing, doing, id}) => (
  <div>
    <li style={{color: doing===4 ? 'red' :'black' }}
      onClick={finishedTodo}>
      {`${id}- ${text}`}
    </li>
    <button onClick={isDoing} style={{color: doing===3 ? 'green' :'red' }}>Doing</button>
  </div>
)

export default Todo
