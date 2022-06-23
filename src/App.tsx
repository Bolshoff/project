import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Filters from './components/filters/Filters';
import MovieList from './components/MovieList/MovieList';
import { movieData } from './movieData';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">

        <Filters />
        <MovieList movies={movieData} />
      </div>

    </div>
  );
}

export default App;
