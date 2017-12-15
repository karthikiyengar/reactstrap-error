import React, { Component } from 'react';
import logo from './logo.svg';
import {UncontrolledTooltip} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Somewhere in here is a <a href="#" id="UncontrolledTooltipExample">tooltip</a>.</p>
        <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
          Hello world!
        </UncontrolledTooltip>
      </div>
    );
  }
}

export default App;
