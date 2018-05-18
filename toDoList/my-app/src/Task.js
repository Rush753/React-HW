import React, { Component } from 'react';


export default class Task extends Component {

    constructor(props) {
        super(props);
        this.item = this.props.item;
        this.deleteTask = this.props.delete;
        this.updateTast = this.props.update;
        this.state = { edit: false };
        this.txt = React.createRef();
    }

    componentWillReceiveProps (nextProps) {
        this.item = nextProps.item;
    }

    styleDecor = (event) => {
        if (event.target.style.textDecoration === '') {
            event.target.style.textDecoration = 'line-through';
        }
        else {
            event.target.style.textDecoration = '';
        }
    }

    render() {
        console.log(this.item);
        return (
            <div id={this.props.index} className="task task-list__task">
                <div className="task__text" onClick={this.styleDecor} >{this.item.text}</div>
                <button className="task__btnEdit btn-hover">EDIT</button>
                {/* <button className="task__btnDel btn-hover" onClick={this.deleteThisTask}>х</button> */}
                <button className="task__btnDel btn-hover" onClick={this.deleteTask}>х</button>
            </div>
        );
    }
}