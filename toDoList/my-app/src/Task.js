import React, { Component } from 'react';


export default class Task extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" />
                <div key={item.id} >{item.text}</div>
                <button onClick={this.del(item.id)}>delete</button>
            </div>
        );
    }
}