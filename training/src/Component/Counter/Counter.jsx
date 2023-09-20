import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        value:0
    }
    decrement = () => {
        this.setState({ value: this.state.value - 1 });
    }

    increment = () => {
        this.setState({ value: this.state.value + 1 });
    }
  render() {
    return (
      <div>
        <button onClick={()=>{this.decrement()}}>-</button>
       <p> {this.state.value}</p>
       <button onClick={()=>{this.increment()}}>+</button>
      </div>
    )
  }
}
