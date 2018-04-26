import React from 'react'
import { addTodo } from '../actions/actionsCreators'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

const TodoForm = ({dispatch}) => {

  let inputText

  return(
    <form action="" onSubmit={e => {
      e.preventDefault()
      dispatch(addTodo(inputText.value))
      inputText.value = ''
    }}
    className='form-container'>
      <input placeholder="Add todo" type="text" ref={node => inputText = node} required/>
      <Button bsStyle="primary" type="submit" value="Add">Add</Button>
    </form>
  )
}

export default connect()(TodoForm)
