let todoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    id: todoId++
  }
}

export const completedTodo = (id) => {
  return {
    type: 'COMPLETED_TODO',
    id
  }
}

export const changeFilter = (filter, disabled) => {
  return {
    type: 'CHANGE_FILTER',
    filter,
    disabled
  }
}

export const todoIsDoing = (id) => {
  return {
    type: 'DOING_TODO',
    id
  }
}

export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}
