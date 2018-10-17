import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './App.css';

import {toggleTask, addTask, editTask} from './actions'

class App extends Component {
  state = {
    newTask: "",
    edit: false,
    updateIndex: null
  };

  setNewTask = (e) => {
    this.setState({ newTask: e.target.value })
  }

  setUpdateTask = (task, i) => {
    this.setState({ newTask: task.name , edit: true, updateIndex: i })
  }

  addNewTask = () => {
    this.props.addTask(this.state.newTask);
    this.setState({ newTask: "" })
  }

  editTask = () => {
    const { newTask, updateIndex } = this.state;
    this.props.editTask(newTask, updateIndex);
    this.setState({ newTask: "", edit: false })
  }

  render() {
    return (
      <div>
        <div>
          <input onChange={this.setNewTask} value={this.state.newTask} type="text"/>
          {!this.state.edit ? <button onClick={this.addNewTask}>Add</button>
           : <button onClick={this.editTask}>Update</button>}
        </div>
        <ul>
          {this.props.todos.map(
            (task, i) => (
              <Fragment>
                <li
                  key={i}
                  onClick={() => {this.props.toggleTask(i)}}
                  style={{ color: task.completed ? 'red' : 'black' }}
                >
                {task.name}
              </li>
              <button onClick={() => this.setUpdateTask(task, i)}>Edit</button>
              </Fragment>
            )
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

export default connect(mapStateToProps, { toggleTask, addTask, editTask })(App);

// export default App;