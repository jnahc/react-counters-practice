import React, {Component} from 'react';
import Counter from './Counter';

class CounterList extends Component {
  render () {
    let counters = [];

    for (let index = 0; index < this.props.counter; index += 1){
      counters.push(<Counter/>)
    }

  return <div className="Counter-row">{counters}</div>
  };
};

export default CounterList;