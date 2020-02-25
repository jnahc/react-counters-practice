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
      <div className="all-25">
        <h4>Counter: {this.state.count}</h4>
        <div className="button-group">
          <button className="ink-button green" onClick={this.increaseCount}>Increment</button>
          <button className="ink-button red" onClick={this.decreaseCount}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;