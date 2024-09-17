import React from 'react';

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }


  // used for data fetching, setting up timers and intervals, establishing websocket connections
  // useEffect(() => {}, [])
  componentDidMount() {
    console.log('the component has been added to the DOM');
  }

  // every time props or state changes
  // useEffect(() => {}, [props.counter])
  componentDidUpdate(prevProps, prevState) {
    console.log('component has been updated');
  }

  // cleanup, terminate intervals, sever socket connections
  // useEffect that returns a cleanup function
  componentWillUnmount() {
    console.log('the component is about to be removed from the DOM');
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Component</h2>
        <h2>Count: {this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Lifecycle;
