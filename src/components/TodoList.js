import React, { Component } from 'react';
import {connect} from 'react-redux'
import {deleteTodo, completeTodo} from '../actions/index'

class TodoList extends Component {
    render() {
        console.log('Props', this.props)
        const lineThrough = {
            textDecorationLine: 'line-through', 
            textDecorationStyle: 'solid'
        }
        return (
            <ol>
            {this.props.todos.map(todo => {
                if(todo.complete)
                {
                    return(
                        <li key={todo.id}>
                        <span style={lineThrough}>
                            {todo.title}
                        </span>
                        <button disabled onClick={() => this.props.onCompleteTodo(todo.id)}>Complete</button>
                        <button onClick={() => this.props.onDeleteTodo(todo.id)}>X</button>
                    </li>
                    )
                } else {
                    return (
                        <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => this.props.onCompleteTodo(todo.id)}>Complete</button>
                        <button onClick={() => this.props.onDeleteTodo(todo.id)}>X</button>
                    </li>
                    )
                }
            }
            )}
        </ol>
        )  
    }
}

function mapStateToProps(todos) {
    return {todos: Object.keys(todos).map(key => todos[key])}
}

function mapDispatchToProps(dispatch) {
    return {
        onDeleteTodo: (id) => dispatch(deleteTodo(id)),
        onCompleteTodo: (id) => dispatch(completeTodo(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)