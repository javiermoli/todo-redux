const changeVisibleTodo = (state= {filter: 'SHOW_ALL', disabled:'ALL'}, action) => {
    switch(action.type) {
      case 'CHANGE_FILTER':
        return {
          filter:action.filter,
          disabled:action.disabled
        }
      default:
        return state
    }
}

export default changeVisibleTodo
