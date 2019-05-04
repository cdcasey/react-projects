import React from 'react';

import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';
import Portal from './Portal';
import Modal from './Modal';

function App() {
  return (
    <div className="App">
      <Toggle>
        {({ on, toggle }) => (
          <React.Fragment>
            <button onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              still Modal
            </Modal>
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
