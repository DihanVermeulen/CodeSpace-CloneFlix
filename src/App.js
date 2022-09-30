import React from 'react';
import Header from './components/header/Header';
import ContentSection from './components/Content-Section/ContentSection';
import isSignedIn from './components/runtime';
import './App.css';

console.log(isSignedIn)

function App() {
  return (
    <div className="App">
      <Header />
      <ContentSection />
    </div>
  );
}

export default App;
