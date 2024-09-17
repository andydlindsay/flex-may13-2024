import React from 'react';

class ClassBased extends React.Component {
  render() {
    return (
      <div>
        <h2>Greeting: {this.props.greeting}</h2>
        <h2>ClassBased Component</h2>
        { this.props.children }
      </div>
    );
  }
}

export default ClassBased;

// const classBased = new ClassBased(props);
// classBased.props = props;
