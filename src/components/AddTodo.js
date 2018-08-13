import React from 'react'
import {connect} from 'react-redux'
import {createTodoAsync} from '../actions/index'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class AddTodo extends React.Component{
    state = {
        title: '',
    }

    handleChange = (event) => {
        this.setState({title: event.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.onCreateTodo)
            this.props.onCreateTodo(this.state.title)
        this.setState({title: ''})
    }
    
    render() {
        const margin = {
            margin: '20px'
        }
        return(
            <form onSubmit={this.handleSubmit}>
                <TextField
                    style={margin}
                    type="text" 
                    name="title"
                    label="Title"
                    margin="normal"
                    value={this.state.title}
                    onChange={this.handleChange} 
                    required/>
                <Button variant="contained" color="primary" type="submit" >Add Todo</Button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onCreateTodo: title => dispatch(createTodoAsync(title))
})

export default connect(null, mapDispatchToProps)(AddTodo)