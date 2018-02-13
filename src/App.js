import React, { Component } from 'react';
import './App.css';
import Login from './Login';

class SmallWindow extends React.Component {
  render() {
      return (
         <div className="Child-window">
         </div>
      );
   }
}

class App extends Component {
  constructor() {
      super();
      this.state = {
          count: 4
      }
  }
  render() {
    var indents = [];
    console.log(this.state.count);
    for (var i = 0; i < this.state.count; i++) {
      indents.push(<SmallWindow key={i}/>);
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AboveLine Junior Developer Test</h1>
        </header>
        <div className="Main-body">
          {indents}
          <div className="clear"></div>
        </div>
        <Login />
      </div>
    );
  }
}

export default App;
