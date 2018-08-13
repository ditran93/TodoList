import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getTodosAsync, editTodoAsync, deleteTodoAsync, completeTodoAsync} from '../actions/index'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class TodoDetails extends Component {
    state = {
        title: '',
        description: '',
        completed: false
		}

		componentDidMount() {
      this.props.onGetTodosAsync()
			const todoId = this.props.todoId
			const todo = this.props.todos[todoId]
      
      if(todo){
        this.setState({
          title: todo.title,
          description: todo.description
        })
      }	
		}

		handleChangeTitle = (e) =>  {
			this.setState({title: e.target.value})
    }

    handleChangeDescription = (e) => {
      this.setState({description: e.target.value})
    }
    
    handleSubmit = (e) => {
      e.preventDefault()
      this.props.onEditTodoAsync(this.props.todoId, this.state.title, this.state.description)
      this.handleNavigateToHomePage()
    }

    handleOnDeleteTodo = () => {
      this.props.onDeleteTodo(this.props.todoId)
      this.handleNavigateToHomePage()
    }

    handleOnCompleteTodo = () => {
      this.props.onCompleteTodo(this.props.todoId)
      this.handleNavigateToHomePage()
    }

    handleNavigateToHomePage = () => {
      return this.props.history.push("/")
    }
    
    render() {
      const margin = {
        margin: '20px'
      }
      return(
          <div>
              <Link to='/'><Button style={margin} variant='outlined'>Back To Home Page</Button></Link>
              <form onSubmit={this.handleSubmit}>
                  <TextField 
                    type="text" 
                    name="title"
                    label='Title'
                    style={margin}
                    value={this.state.title}
                    onChange={this.handleChangeTitle} 
                    required/> 
                    <Button style={margin} variant="contained" color="primary" onClick={this.handleOnCompleteTodo}>Complete</Button>
                    <br/>
                  <TextField
                    type="text" 
                    label='Description'
                    style={margin}
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChangeDescription}/> <br/>
                  <Button style={margin} variant="contained" color="primary" type='submit'>Save</Button>
                  <Button style={margin} variant="contained" color="primary" onClick={this.handleNavigateToHomePage}>Cancel</Button>
                  <Button style={margin} variant="contained" color="secondary" onClick={this.handleOnDeleteTodo}>Delete</Button>
              </form> 
          </div>
      )
    }
}

function mapStateToProps(todos) {
 return {
    todos
 }
}

function mapDispatchToProps(dispatch) {
	return {
      onGetTodosAsync: () => dispatch(getTodosAsync()),
      onEditTodoAsync: (title, description, completed) => dispatch(editTodoAsync(title, description, completed)),
      onDeleteTodo: (id) => dispatch(deleteTodoAsync(id)),
      onCompleteTodo: (id) => dispatch(completeTodoAsync(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetails)
