// src/EventExamples.js
import React, { Component } from 'react';

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // bind method for 'this' context
    this.sayHello = this.sayHello.bind(this);
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
    this.sayHello(); // call hello
    this.sayMessage("Increment button was clicked.");
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello() {
    alert('Hello!');
  }

  sayMessage(msg) {
    alert(msg);
  }

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSyntheticEvent = (e) => {
    alert('I was clicked');
    console.log('Synthetic Event:', e);
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>React Event Handling Examples</h2>

        <p>Counter: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome('Welcome!')}>Say Welcome</button>

        <br /><br />

        <button onClick={this.handleSyntheticEvent}>OnPress</button>
      </div>
    );
  }
}

export default EventExamples;
