import React, { Component } from 'react';


export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.deleteTask =  this.props.delete;
        
      }
    render() {
        return (
            <div>
                {this.props.items.map((item, index)  => (
                    <div key = {index} >
                    {/* <input type="checkbox"/> */}

                    <div>{item.text}</div>
                    {/* <div key = {item.id} >{item.text}</div> */}
                    {/* <div key = {item.toString} >{item.text}</div> */}
                    
                    <button onClick = {this.deleteTask(item.id)}>delete</button>
                    </div>
                ))}
            </div>
        );
    }
   
}