import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import {toggleTask} from './store'

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(
            (task, i) => <li onClick={() => {this.props.toggleTask(i)}} style={{ color: task.completed ? 'red' : 'black' }}>{task.name}</li>
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

export default connect(mapStateToProps, { toggleTask })(App);

// export default connect(mapStateToProps)(App);