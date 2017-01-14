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
          The most active campers based on brownie points gained.
        </p>
        <BoardComponent />
      </div>
    );
  }
}

export default App;
