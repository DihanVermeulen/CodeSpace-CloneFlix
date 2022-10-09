import React, { useEffect } from 'react';
import './App.css';
import './utils/helpers.css';
import { HomePage } from './pages/Home/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/Login/LoginPage';
import checkIfWatchlistExists from './runtime';

function App() {

  useEffect(() => {
    checkIfWatchlistExists();
  })

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
