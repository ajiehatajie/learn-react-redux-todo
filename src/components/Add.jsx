import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Add extends Component {

  constructor(props){
    super(props)
    this.state = {
      task:''
    }

    console.log('props',this.props);
    
  }

  add(){
    this.props.addTodo(this.state.task)
    
  }
  render() {
    return (
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Task</Label>
          <Input type="text" onChange={ (e) => this.setState({task:e.target.value })} name="task" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <Button onClick={ () => this.add() }>Submit</Button>
        </Form>
    )
  }
}
