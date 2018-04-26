import React from 'react'
import { Button,  ListGroup } from 'react-bootstrap'
import '../styles.css'
import { Glyphicon } from 'react-bootstrap'

const Todo = ({text, finishedTodo, isDoing, doing, id, removeTodo}) => (
  <div>
    <ListGroup className='container-todos' componentClass="ul">
      <li className="list-group-item todo-li"  style={{color: doing===4 ? 'red' :'black' }}
          onClick={finishedTodo}>
          {`${id + 1}- ${text}`}
      </li>
      <Button className='button-doing'  onClick={isDoing} style={{color: doing===3 ? 'green' :'red' }}>Doing</Button>
      <Button  onClick={removeTodo}><Glyphicon className='remove-glyphicon' glyph="ban-circle align-center" /></Button>
    </ListGroup>
  </div>
)

export default Todo
