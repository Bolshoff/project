import React from 'react';

import Header from './components/Header/Header';
import './App.css';
import Filters from './components/filters/Filters';
import MovieList from './components/MovieList/MovieList';

import { useAppSelector } from './hooks/hooks';

const App = () => {
  const currentPage = useAppSelector((state) => state.changeCurrentPage.currentPage);
  const cardsPerPage = useAppSelector((state) => state.setCardsPerPage.cardsPerPage);
  const movieData = useAppSelector((state) => state.setSortedCards.sortedCards);
  // const selectValue = useAppSelector((state) => state.setFilterValue.filterValue);

  const sortedMovies = movieData.sort((a: any, b: any) => a.popularity - b.popularity);
  // if (selectValue === 'Популярные по убыванию') {
  //   return b.popularity - a.popularity;
  // }
  // if (selectValue === 'Рейтинг по убыванию') {
  //   return b.vote_average - a.vote_average;
  // }
  // if (selectValue === 'Рейтинг по возраастанию') {
  //   return a.vote_average - b.vote_average;
  // }

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = sortedMovies.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">

        <Filters />
        <MovieList movies={currentCards} />
      </div>

    </div>

  );
};

export default App;
