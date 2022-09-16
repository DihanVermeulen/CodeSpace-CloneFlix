import React from 'react';
import shortened_logo from './shortened_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={shortened_logo} className="app_logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
