import React, { Component } from 'react'

export default class Todoitem extends Component {

    constructor(props) {
        super(props)
        this.state = { 
          title: this.props.todo.text
        }
        console.log(' oke todoitem ',this.props)
      }

  delete(id){

    this.props.actions.removeTodo(id)
  }
  render() {
    return (
       <li className="todo__item">
        <input type="checkbox"

         required={true}
            />
        <input type="text"
         required={true}
         placeholder='title'
         value={this.state.title}
        
         />
        <button onClick={() => this.delete(this.props.index)}>Delete</button>
      </li>
    )
  }
}
