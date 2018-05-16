import React, { Component } from 'react';
import TodoList from './TodoList'
var count = 0;

export default class App extends Component {
  constructor(props) {
    super(props);
    //this.state = { items: [], id : 0 };
    this.state = { items: [] };
    this.myRef = React.createRef();
    //var deleteTask = this.deleteTask;
  }
  
  render() {
    return (
      <div>
        <h3>ToDoList</h3>
        <input id="new-todo" ref={this.myRef}/>
        <button onClick={this.newTask}>Add Task</button>
        <TodoList items={this.state.items} delete={this.deleteTask}/>

      </div>
    );
  }

  deleteTask = (index) =>{
      let newArr = this.state.items;
      newArr.splice(index, 1);
      this.setState({items: newArr});
  }

  
  newTask = (e) => {

    if (this.myRef.current.value.length === 0) {
      return;
    }
    
    const newItem = {
      text: this.myRef.current.value,
      //id: this.state.id
      id: count
    };

    //this.setState({ id: this.state.id+1 })
    count++;

   //alert(newItem.id);
    this.setState({
      items: this.state.items.concat(newItem),
    });
    this.myRef.current.value = '';
  }
}


