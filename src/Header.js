import React from 'react';

const Header = props => {
  return (
    <header className="ink-navigation">     
      <h1 className="slab-300">React Counters</h1>
      <div className="button-toolbar">
        <div className="button-group">
          <button className="ink-button" onClick={props.increaseCounters}>Add Counter</button>
          <button className="ink-button" onClick={props.decreaseCounters}>Remove Counter</button>
        </div>
      </div>
    </header>
  );
}

export default Header;