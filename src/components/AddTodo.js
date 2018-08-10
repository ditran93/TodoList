import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions/index'

class AddTodo extends React.Component{
    state = {
        title: '',
    }

    handleChange = (event) => {
        this.setState({title: event.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.onAddTodo)
            this.props.onAddTodo(this.state.title)
        this.setState({title: ''})
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.handleChange} 
                    required/>
                <button >Add Todo</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onAddTodo: title => dispatch(addTodo(title))
})

export default connect(null, mapDispatchToProps)(AddTodo)