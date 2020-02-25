import React, {Component} from 'react';
import Header from './Header';
import CounterList from "./CounterList";

class App extends Component {
  state = {
    counters: 5
  };

  increaseCounters = () => {
    let counters = this.state.counters + 1;
    this.setState({
      counters
    });
  }

  decreaseCounters = () => {
    if (this.state.counters > 0) {
      let counters = this.state.counters -1;
      this.setState({
        counters
      });
    }
  }

  render(){
    return (
      <div className="App">
        <Header
          increaseCounters={this.increaseCounters}
          decreaseCounters={this.decreaseCounters}
        />
        <CounterList counter={this.state.counters} />

      </div>
    );
  };
};



export default App;
