import React, { Component } from 'react';


export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.deleteTask =  this.props.delete;
        
      }
    render() {
        return (
            <div>
                {this.props.items.map(item => (
                    <div>
                    <input type="checkbox"/>
                    <div key={item.id} >{item.text}</div>
                    <button onClick = {this.deleteTask(item.id)}>delete</button>
                    </div>
                ))}
            </div>
        );
    }
   
}