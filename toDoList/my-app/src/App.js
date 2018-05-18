import React, { Component } from 'react';
import Task from './Task';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.localSettings ? this.props.localSettings : []
    };
    this.myRef = React.createRef();
    this.globalVariable = false;
  }

  deleteTask = (event) => {
    let currentId = event.target.parentElement.id;
    let arr = this.state.items;
    arr.splice(currentId, 1);
    localStorage.setItem('storage', JSON.stringify(arr));
    this.setState({ items: arr });
  }

  newTask = () => {
    if (this.myRef.current.value.length === 0) {
      return;
    }

    const newItem = {
      text: this.myRef.current.value,
    };

    localStorage.setItem('storage', JSON.stringify(this.state.items.concat(newItem)));
    this.myRef.current.value = '';

    this.setState({
      items: this.state.items.concat(newItem),
    });

  }

  updateTask = (text, id) => {
    let arr = this.state.items;
    arr[id].text = text;
    this.setState({ items: arr })
  }


  returnBody = () => {
    return this.state.items.map((item, index) => {
      // return <div key={index} id={index} className="task task-list__task">
      //   <div className="task__text" onClick={this.styleDecor} >{item.text}</div>
      //   <button className="task__btnEdit btn-hover">EDIT</button>
      //   <button className="task__btnDel btn-hover" onClick={this.deleteTask}>х</button>
      // </div>
      return <Task item={item} key={index} index={index} update={this.updateTask} delete={this.deleteTask} />
    })
  }

  render() {
    // Preparing data for render!
    const body = this.returnBody();
    return (
      <div className="content">
        <h1 className="content__title">ToDoList</h1>
        <div className="add-task content__add-task" >
          <input id="new-todo" className="add-task__input" ref={this.myRef} />
          <button className="add-task__btnAdd btn-hover" onClick={this.newTask}>Add</button>
        </div>
        <div className="task-list content__task-list " >
          {body}
        </div>
      </div>
    );
  }
}

export default App;