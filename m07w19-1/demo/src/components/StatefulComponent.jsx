import React from 'react';

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props); // call the React.Component's constructor method

    this.state = {
      counter: 0,
      greeting: `${props.greeting} world`,
      anotherKey: null,
    };

    this.increment = this.increment.bind(this);
  }

  increment() { // function
    this.setState({ counter: this.state.counter + 1, anotherKey: 'something' });
  }

  // increment = () => {
  //   this.setState({ counter: this.state.counter + 1, anotherKey: 'something' });
  // }

  render() {
    return (
      <div>
        <h2>Count: {this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default StatefulComponent;
