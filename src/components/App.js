import React, { Component } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import { connect } from 'react-redux'

class App extends Component {
  state = {
    todos:[]
  }

  addTodo(todo) {
    this.setState(state => ({
      todos: state.todos.concat([todo])
    }))
  }

  deleteTodo = (id) => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }))
  }

  completeTodo = (id) => {
    let completedTodo = {}
    for(let todo of this.state.todos) {
      if(todo.id === id){
        todo.complete = true
        completedTodo = todo
      }
    }
    this.setState(state => ({
      todos: state.todos.concat([...completedTodo])
    }))
  }

  render() {
    console.log('Props', this.props)
    return (
      <div className="App">
        <AddTodo onAddTodo={(todo) => {
          this.addTodo(todo)
        }}/>
        <TodoList 
        todos = {this.state.todos} 
        onDeleteTodo = {this.deleteTodo}
        onComplete = {this.completeTodo}/>
      </div>
    );
  }
}

export default connect()(App)
