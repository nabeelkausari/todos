import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import {toggleTask} from './store'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          {this.props.taskList.map(
            (task, i) => <li onClick={() => {this.props.toggleTask(i)}} style={{ color: task.completed ? 'red' : 'black' }}>{task.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    taskList: state.todos
  }
}

export default connect(mapStateToProps, { toggleTask })(App);

// export default connect(mapStateToProps)(App);