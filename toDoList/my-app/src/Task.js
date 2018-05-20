import React, { Component } from 'react';

export default class Task extends Component {

    constructor(props) {
        super(props);
        // this.item = this.props.item;
        this.deleteTask = this.props.delete;
        this.state = { edit: true };
        this.editTxt = React.createRef();
    }

    // componentWillReceiveProps (nextProps) {
    //     this.item = nextProps.item;
    // }

    saveEditTask = () => {
        let value = this.editTxt.current.value;
        this.props.update(value, this.props.index);
        this.setState({ edit: true });
    }

    render() {
        if (this.state.edit) {
            if (this.props.itemStyle) {
                return (
                    <div id={this.props.index} className="task task-list__task">
                        <div className="task__text" style={{ textDecorationLine: 'line-through' }} onClick={this.props.styleDecor} >{this.props.item.text}</div>
                        <button className="task__btnEdit btn-hover" onClick={this.editTask}>EDIT</button>
                        <button className="task__btnDel btn-hover" onClick={this.deleteTask}>х</button>
                    </div>
                );
            } else {
                return (
                    <div id={this.props.index} className="task task-list__task">
                        <div className="task__text" onClick={this.props.styleDecor} >{this.props.item.text}</div>
                        <button className="task__btnEdit btn-hover" onClick={this.editTask}>EDIT</button>
                        <button className="task__btnDel btn-hover" onClick={this.deleteTask}>х</button>
                    </div>
                );
            }
        } else {
            return (
                <div id={this.props.index} className="task task-list__task">
                    <input className="task__text" ref={this.editTxt} />
                    <button className="task__btnEdit btn-hover" onClick={this.saveEditTask}>OK</button>
                </div>
            );
        }
    }
}