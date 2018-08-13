import React, { Component } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import TodoDetails from './TodoDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
            <AddTodo />
            <TodoList />
          </div>
        )}/>
        <Route path='/details/:id' render={({match, history}) => (
          <TodoDetails history={history} todoId={match.params.id}/>
        )}/>
      </div>
    );
  }
}

export default withRouter(connect()(App))
