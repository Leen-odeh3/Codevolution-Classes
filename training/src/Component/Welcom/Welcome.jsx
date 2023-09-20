import React, { Component } from "react";

export default class Welcome extends Component {
  state = {
    message: "Hello visitors!..",
  };

  SharedWorker() {
    this.setState({ message: "Thank you for subscribing!" });
  }

  render() {
    return (
      <div>
        {/* <h1>Welcome..</h1> */}
        <p>{this.state.message}</p>
        <button
          onClick={() => {
            this.SharedWorker();
          }}
        >
          Subscribe
        </button>
      </div>
    );
  }
}
