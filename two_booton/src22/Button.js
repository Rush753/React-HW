import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Button extends Component {
    static propTypes = {
        click: PropTypes.function,
        flug: PropTypes.bool,
        stringName: PropTypes.string
    }
    static defaultProps = {
        stringName: "Default"
    }
    constructor(props) {
        super(props);
        this.callBack = props.click;
        this.flug = props.flug;
        this.stringName = props.stringName;
    }

    render() {
        return (this.flug ? <button onClick={this.callBack}>{this.stringName}</button> : <h2>{"не катит"}</h2>);
    }
}
