import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Filters from './components/filters/Filters';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Filters />
    </div>
  );
}

export default App;
