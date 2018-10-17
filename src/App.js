import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import {toggleTask, addTask} from './store'

class App extends Component {
  state = {
    newTask: ""
  };

  setNewTask = (e) => {
    this.setState({ newTask: e.target.value })
  }

  addNewTask = () => {
    this.props.addTask(this.state.newTask);
    this.setState({ newTask: "" })
  }

  render() {
    return (
      <div>
        <div>
          <input onChange={this.setNewTask} value={this.state.newTask} type="text"/>
          <button onClick={this.addNewTask}>Add</button>
        </div>
        <ul>
          {this.props.todos.map(
            (task, i) => <li key={i} onClick={() => {this.props.toggleTask(i)}} style={{ color: task.completed ? 'red' : 'black' }}>{task.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.taskList
  }
}

export default connect(mapStateToProps, { toggleTask, addTask })(App);

// export default connect(mapStateToProps)(App);