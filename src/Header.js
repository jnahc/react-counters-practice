import React from 'react';

const Header = props => {
  return (
    <header className="App-header">
      <h1 className="App-title">React Counters</h1>
      <button onClick={props.increaseCounters}>+</button>
      <button onClick={props.decreaseCounters}>-</button>
    </header>
  );
}

export default Header;