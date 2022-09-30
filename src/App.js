import React from 'react';
import Header from './components/header/Header';
import ContentSection from './components/Content-Section/ContentSection';
import './App.css';
import './utils/helpers.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentSection />
    </div>
  );
}

export default App;
