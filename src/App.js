import React, { Component } from 'react';
import BoardComponent from './components/BoardComponent/App.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>Free Code Camp Leader Board</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BoardComponent />
      </div>
    );
  }
}

export default App;
