import React, { Component } from 'react';

class TodoList extends Component {
    render() {
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
                        <button disabled onClick={() => this.props.onComplete(todo.id)}>Complete</button>
                        <button onClick={() => this.props.onDeleteTodo(todo.id)}>X</button>
                    </li>
                    )
                } else {
                    return (
                        <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => this.props.onComplete(todo.id)}>Complete</button>
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

export default TodoList