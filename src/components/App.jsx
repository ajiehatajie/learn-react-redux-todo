import React, { Component } from 'react'
import { Container, Row, Button } from 'reactstrap';
import Add from './Add';
import List from './List';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '../actions/Todos';

class App extends Component {

  constructor(props){
    super(props)
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
  }
  clear(){
    this.props.actions.clearTodo()
  }
  render() {
    console.log('====================================');
    console.log(this.props.Todos);
    console.log('====================================');
    return (
      <Container>
        <Row>
           <Add addTodo={this.props.actions.addTodo}/>
           
        </Row>
        
        <Row>
          {this.props.Todos.length > 0 ? 
            <div><h1>{this.props.Todos.length}</h1>
            <Button onClick={() => this.clear() }>Clear</Button>
            <List todolist={this.props.Todos} actions={this.props.actions}/>
            </div> 
            : <div><h1>Empty</h1></div>
          
          }
     
        </Row>
    </Container>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {  
  return {
    actions : bindActionCreators(actions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)