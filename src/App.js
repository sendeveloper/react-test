import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          count: 4
      }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AboveLine Junior Developer Test</h1>
        </header>

      </div>
    );
  }
}

export default App;
