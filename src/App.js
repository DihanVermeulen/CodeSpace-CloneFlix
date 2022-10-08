import React, { useEffect } from 'react';
import './App.css';
import './utils/helpers.css';
import { Home } from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import checkIfWatchlistExists from './runtime';

function App() {

  useEffect(() => {
    checkIfWatchlistExists();
  })

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
