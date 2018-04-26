import React from 'react'
import { addTodo } from '../actions/addTodo'
import { connect } from 'react-redux'

const TodoForm = ({dispatch}) => {

  let inputText

  return(
    <form action="" onSubmit={e => {
      e.preventDefault()
      dispatch(addTodo(inputText.value))
      inputText.value = ''
    }}>
      <input type="text" ref={node => inputText = node} />
      <input type="submit"/>
    </form>
  )
}

export default connect()(TodoForm)
