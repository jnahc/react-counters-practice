import React, {Component} from 'react';
import Counter from './Counter';

class CounterList extends Component {
  render () {
    let counters = [];

    for (let index = 0; index < this.props.counter; index += 1){
      counters.push(<Counter/>)
    }

    return (
      <div className="ink-grid">
        <div className="column-group horizontal-gutters">
          <div className="all-100">
            {counters}
          </div>
        </div>
      </div>
    )
  };
};

export default CounterList;