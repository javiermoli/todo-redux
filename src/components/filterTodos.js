import React from 'react'
import PropTypes from 'prop-types'


const filterTodos = ({children, disabled1, disabled2,disabled3,disabled4, onClick, id}) => (

  <div>
    <button onClick={() => onClick('SHOW_ALL', 'ALL')} disabled={disabled1}>All</button>
    <button onClick={() => onClick('SHOW_ACTIVE', 'ACTIVE')} disabled={disabled2}>Todo</button>
    <button onClick={() => onClick('SHOW_DOING', 'DOING')} disabled={disabled4}>Doing</button>
    <button onClick={() => onClick('SHOW_COMPLETED', 'COMPLETED')} disabled={disabled3}>Completed</button>
  </div>
)


export default filterTodos
