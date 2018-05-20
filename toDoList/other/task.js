import React, { Component } from 'react';
import './App.css';

export default class Task extends Component {
    constructor(props) {
      super(props);
      this.item = this.props.item;
      this.deleteTask = this.props.deleteBlock;
      this.state = { edit: false };
      this.txt = React.createRef();
    }

    editTask = () => {
      this.setState ({edit: true});
    }

    removeTask = () => {
        this.deleteTask(this.props.index);
    }

    saveTask = () => {
        var value = this.txt.current.value;
        this.props.update(value, this.props.index);
        this.setState ({edit: false});
    }

    render() {
      if (this.state.edit) {
        return (
          <div>
            <textarea ref={this.txt} defaultValue={this.item}></textarea>
            <button onClick={this.saveTask}>Сохранить</button>
          </div>
        );
      } 
      else {
        return (
          <div>
            <div>{this.props.children}</div>
            <button onClick={this.editTask}>Редактировать</button>
            <button onClick={this.removeTask}>Удалить</button>
          </div>
        );
      }
    }
  }