import React from 'react';

import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';
import Portal from './Portal';

function App() {
  return (
    <div className="App">
      <Toggle>
        {({ on, toggle }) => (
          <React.Fragment>
            {on && <h1>Toggle Me</h1>}
            <button onClick={toggle}>Show/Hide</button>
            <Portal>{on && <h1>Hi in a portal</h1>}</Portal>
          </React.Fragment>
        )}
      </Toggle>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
