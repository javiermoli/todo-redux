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
      case 'COMPLETED_TODO':
        return state.map(todo =>{
            if(todo.id === action.id & todo.doing===2) {
                return  {...todo, doing:4 }
            } else if(todo.id === action.id & todo.doing===4) {
                return  {...todo, doing:2 }
            } else if(todo.id === action.id & todo.doing===3) {
                return  {...todo, doing:4 }
            }return todo
          }
        )
      case 'DOING_TODO':
        return state.map(todo => {
            if(todo.id === action.id & todo.doing===2) {
                return  {...todo, doing:3 }
            } else if(todo.id === action.id & todo.doing===3) {
                return  {...todo, doing:2 }
            } else if(todo.id === action.id & todo.doing===4) {
                return  {...todo, doing:3 }
            } return todo
          }
        )
      case 'REMOVE_TODO':
      return state.filter(todo =>
          todo.id !== action.id
      )
      default:
        return state
    }
}

export default todos
