import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    let count = this.state.count + 1;
    this.setState({
      count
    });
  } 

  decreaseCount = () => {
    if (this.state.count > 0) {
      let count = this.state.count -1;
      this.setState({
        count
      });
    }
  }

  render() {
    return (
      <div className="Counter">
        <h4>Counter: {this.state.count}</h4>
        <button onClick={this.increaseCount}>Increment</button>
        <button onClick={this.decreaseCount}>Decrement</button>
      </div>
    );
  }
}

export default Counter;