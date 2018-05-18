import React, { Component } from 'react';
import './App.css';
import Task from './task.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.taskTxt = React.createRef();
  }

  cleanInput = () => {
    this.taskTxt.current.value = '';
  }

  deleteBlock = (index) => {
    let arr = this.state.tasks;
    arr.splice (index, 1);
    this.setState ({tasks: arr});
    this.cleanInput();
  }

  addTask = () => {
    let text = this.taskTxt.current.value;
    let taskArr = this.state.tasks;
    taskArr.push(text);
    this.setState ({tasks : taskArr});
    this.cleanInput();
  }

  updateText = (text, i) => {
    var arr = this.state.tasks;
    arr[i] = text;
    this.setState ({tasks: arr});
  };

  eachTask = (item, index) => {
    return (
      <Task item={item} key={index} index={index} update={this.updateText} deleteBlock={this.deleteBlock}> {item} </Task>
    );
  };
  
  render() {
    const body = this.state.tasks.map(this.eachTask);
    return (
      <div className="App">
        <div>
          <button onClick={this.addTask}>Новая задача</button>
          <input type="text" ref={this.taskTxt}/>
        </div>
        <div>
          {body}
        </div>
      </div>
    );
  }
}
