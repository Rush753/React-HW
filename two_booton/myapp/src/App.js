import React, { Component } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { second: 0, minute: 0 };
    this.timer = null;
    this.myRef = React.createRef();
  }

  timerFunc = () => {
    let sec = this.state.second;
    let min = this.state.minute;
    //alert(min);
    if (sec == 0) {
      if (min == 0) {

        alert("rere");
        clearInterval(this.timer);
        //занулить секунды
      }
      else {
        min = min - 1;
        this.setState({ second: 60, minute: min });
        this.myRef.current.value = this.state.minute + ":" + this.state.second;
      }
    }
    else {
      sec = sec -1;
      this.setState({ second: sec });
      this.myRef.current.value = this.state.second;
      this.myRef.current.value = this.state.minute + ":" + this.state.second;
    }
  }

  start = () => {
    var fullTime = this.myRef.current.value;
    var bufferArr = fullTime.split(':');
    this.state.minute = bufferArr[0];
    this.state.second = bufferArr[1];
    this.timer = setInterval(this.timerFunc, 1000);
  }

  render() {
    return (<div>
      <input ref={this.myRef} />
      <p />
      <button onClick={this.start}>Start</button>
      <p />
      <div>
      <button>1</button>
      <button>2</button>
      </div>
    </div>);
  }
}

