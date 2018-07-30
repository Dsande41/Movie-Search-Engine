import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieDashboard from './MovieDashboard';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MovieDashboard />
      </div>
    );
  }
}

export default App;
