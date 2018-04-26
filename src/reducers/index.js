import { combineReducers } from 'redux'
import todos from './todo'
import changeVisibleTodo from './changeVisibleTodo'

export default combineReducers({
  todos,
  changeVisibleTodo
})
