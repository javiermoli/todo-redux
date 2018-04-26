import React from 'react'
import FilterTodos from './filterTodos'
import { connect } from 'react-redux'
import { changeFilter } from '../actions/addTodo'

const changeDisabled1 = state => {
  if(state.disabled === 'ALL') {
    return true
  } else return false
}
const changeDisabled2 = state => {
  if(state.disabled === 'ACTIVE') {
    return true
  } else return false
}
const changeDisabled3 = state => {
  if(state.disabled === 'COMPLETED') {
    return true
  } else return false
}

const changeDisabled4 = state => {
  if(state.disabled === 'DOING') {
    return true
  } else return false
}

const mapStateToprops = (state) => ({
  disabled1:changeDisabled1(state.changeVisibleTodo),
  disabled2:changeDisabled2(state.changeVisibleTodo),
  disabled3:changeDisabled3(state.changeVisibleTodo),
  disabled4:changeDisabled4(state.changeVisibleTodo)
})



const mapDispatchToProps = (dispatch) => ({
  onClick: (filter, disableState) => dispatch(changeFilter(filter, disableState))
})



export default connect(mapStateToprops, mapDispatchToProps)(FilterTodos)
