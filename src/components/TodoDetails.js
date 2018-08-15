import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getTodosAsync,
  editTodoAsync,
  deleteTodoAsync,
  completeTodoAsync,
  onChangeEditTodoDescription,
  onChangeEditTodoTitle
} from "../actions/index";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class TodoDetails extends Component {
  componentDidMount() {
    const todoId = this.props.todoId;
    const todo = this.props.todos[todoId];

    if (todo) {
      this.props.onChangeEditTitle(todo.title);
      this.props.onChangeEditDescription(todo.description);
    }
  }

  handleChangeTitle = e => {
    this.props.onChangeEditTitle(e.target.value);
  };

  handleChangeDescription = e => {
    this.props.onChangeEditDescription(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onEditTodoAsync(
      this.props.todoId,
      this.props.todo.title,
      this.props.todo.description
    );
    this.handleNavigateToHomePage();
  };

  handleOnDeleteTodo = () => {
    this.props.onDeleteTodo(this.props.todoId);
    this.handleNavigateToHomePage();
  };

  handleOnCompleteTodo = () => {
    this.props.onCompleteTodo(this.props.todoId);
    this.handleNavigateToHomePage();
  };

  handleNavigateToHomePage = () => {
    return this.props.history.push("/");
  };

  render() {
    const margin = {
      margin: "20px"
    };
    return (
      <div>
        <Link to="/">
          <Button style={margin} variant="outlined">
            Back To Home Page
          </Button>
        </Link>
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="text"
            name="title"
            label="Title"
            style={margin}
            value={this.props.todo.title}
            onChange={this.handleChangeTitle}
            required
          />
          <Button
            style={margin}
            variant="contained"
            color="primary"
            onClick={this.handleOnCompleteTodo}
          >
            Complete
          </Button>
          <br />
          <TextField
            type="text"
            label="Description"
            style={margin}
            name="description"
            value={this.props.todo.description}
            onChange={this.handleChangeDescription}
          />{" "}
          <br />
          <Button
            style={margin}
            variant="contained"
            color="primary"
            type="submit"
          >
            Save
          </Button>
          <Button
            style={margin}
            variant="contained"
            color="primary"
            onClick={this.handleNavigateToHomePage}
          >
            Cancel
          </Button>
          <Button
            style={margin}
            variant="contained"
            color="secondary"
            onClick={this.handleOnDeleteTodo}
          >
            Delete
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ todos, todo }) {
  return {
    todos,
    todo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetTodosAsync: () => dispatch(getTodosAsync()),
    onEditTodoAsync: (id, title, description) =>
      dispatch(editTodoAsync(id, title, description)),
    onDeleteTodo: id => dispatch(deleteTodoAsync(id)),
    onCompleteTodo: id => dispatch(completeTodoAsync(id)),
    onChangeEditDescription: description =>
      dispatch(onChangeEditTodoDescription(description)),
    onChangeEditTitle: title => dispatch(onChangeEditTodoTitle(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetails);
