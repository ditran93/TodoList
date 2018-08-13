import React, { Component } from 'react';
import {connect} from 'react-redux'
import {deleteTodoAsync, completeTodoAsync, getTodosAsync} from '../actions/index'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'


class TodoList extends Component {
    componentDidMount() {
        this.props.onGetTodosAsync()
    }

    render() {
        const lineThrough = {
            textDecorationLine: 'line-through', 
            textDecorationStyle: 'solid'
        }
        const margin = {
            margin: '10px'
        }
        return (
            <ul>
            {this.props.todos.map(todo => {
                if(todo.completed)
                {
                    return(
                        <li key={todo.id}>
                            <span style={lineThrough}>
                                {todo.title}
                            </span>
                            <Button style={margin} variant="contained" color="primary" disabled onClick={() => this.props.onCompleteTodo(todo.id)}>Complete</Button>
                            <Button style={margin} variant="contained" color="secondary" onClick={() => this.props.onDeleteTodo(todo.id)}>X</Button>
                        </li>
                    )
                } else {
                    return (
                        <li key={todo.id}>
                            <Link to={`/details/${todo.id}`}>{todo.title}</Link>
                            <Button style={margin} variant="contained" color="primary" onClick={() => this.props.onCompleteTodo(todo.id)}>Complete</Button>
                            <Button style={margin} variant="contained" color="secondary" onClick={() => this.props.onDeleteTodo(todo.id)}>X</Button>
                        </li>
                    )
                }
            }
            )}
        </ul>
        )  
    }
}

function mapStateToProps(todos) {
    return {todos: Object.keys(todos).map(key => todos[key])}
}

function mapDispatchToProps(dispatch) {
    return {
        onDeleteTodo: (id) => dispatch(deleteTodoAsync(id)),
        onCompleteTodo: (id) => dispatch(completeTodoAsync(id)),
        onGetTodosAsync: () => dispatch(getTodosAsync())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)