import React, { Component } from 'react'
import Todoitem from './Todoitem.jsx';
import actions from '../actions/Todos';

export default class List extends Component {
  render() {
   const { todolist } = this.props
    console.log('props list',todolist);
    
   return (
      <ul className="todo__list">
        {todolist.map( e => {
            console.log(e.id)
          return <Todoitem index={e.id} todo={e} actions={this.props.actions}/>
        
        })}
      </ul>
    )
  }
}
