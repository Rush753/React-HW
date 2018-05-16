import React, { Component } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {operation: "Start", second: 0, minute: 0};
    this.timer = null;
  }

  timerFunc = () => {
    let sec = this.state.second + 1;
    if (sec === 60) {
      let min = this.state.minute + 1;
      this.setState ({second: 0, minute: min});
    }
    else {
    this.setState ({second: sec});
    }
  }

  startResume = () => {
    if (this.state.operation === "Start")
    {
      this.setState ({operation: "Pause"});    
      this.timer = setInterval (this.timerFunc, 1000);
    }
    else
    {
      this.setState ({operation: "Start"});
      clearInterval(this.timer);
    }
  }

  stop = () => {
    this.setState ({operation: "Start", second: 0, minute: 0});
    clearInterval(this.timer);
  }

  render() {
    return (<div> 
      <div>{this.state.minute}:{this.state.second}</div>
      <p/>
      <button onClick={this.startResume}>{this.state.operation}</button>
      <button onClick={this.stop}>stop</button>
      </div>);
  }  
}

