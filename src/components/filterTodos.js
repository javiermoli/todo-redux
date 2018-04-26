import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import '../styles.css'


const filterTodos = ({children, disabled1, disabled2,disabled3,disabled4, onClick, id}) => (
  <div className="filter-buttons-container">
    <ButtonToolbar>
      <Button bsStyle="primary" onClick={() => onClick('SHOW_ALL', 'ALL')} disabled={disabled1}>All</Button>
      <Button bsStyle="primary" onClick={() => onClick('SHOW_ACTIVE', 'ACTIVE')} disabled={disabled2}>ToDo</Button>
      <Button bsStyle="primary" onClick={() => onClick('SHOW_DOING', 'DOING')} disabled={disabled4}>Doing</Button>
      <Button bsStyle="primary" onClick={() => onClick('SHOW_COMPLETED', 'COMPLETED')} disabled={disabled3}>Done</Button>
    </ButtonToolbar>

  </div>
)


export default filterTodos
