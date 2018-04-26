const todos = (state=[], action) => {
    switch(action.type) {
      case 'ADD_TODO':
      return [
        ...state,
        {
          id:action.id,
          text:action.text,
          doing: 2
        }
      ]
      case 'REMOVE_TODO':
      return state.map(todo =>
          (todo.id === action.id)
          ? {...todo, doing: 4}
          : todo
        )
      case 'DOING_TODO':
        return state.map(todo =>
          (todo.id === action.id) ?
          {...todo, doing: 3}
          : todo
        )
      default:
        return state
    }
}

export default todos
