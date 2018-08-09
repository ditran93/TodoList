import React from 'react'

class AddTodo extends React.Component{
    state = {
        id: Math.random().toString(36).substr(2, 9),
        title: '',
        complete: false,
        description: ''
    }

    handleChange = (event) => {
        this.setState({title: event.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const values = serializeForm(e.target, {hash: true})
        if(this.props.onAddTodo)
            this.props.onAddTodo(this.state)
        this.setState({title: '', id: Math.random().toString(36).substr(2, 9)})
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" value={this.state.title}
                onChange={this.handleChange} required/>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default AddTodo