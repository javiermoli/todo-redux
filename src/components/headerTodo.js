import React from 'react'
import { Panel } from 'react-bootstrap'
import '../styles.css'

const HeaderTodo = ({children, title}) => (
  <Panel bsStyle="primary" className='header-todo-container'>
    <Panel.Heading>
      <Panel.Title componentClass="h3">{title}</Panel.Title>
    </Panel.Heading>
    <Panel.Body>{children}</Panel.Body>
  </Panel>
)

export default HeaderTodo
