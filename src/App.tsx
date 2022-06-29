import React, { useEffect } from 'react';

import Header from './components/Header/Header';
import './App.css';
import Filters from './components/filters/Filters';
import MovieList from './components/MovieList/MovieList';

import { useAppDispatch, useAppSelector } from './hooks/hooks';
import AuthorizationModal from './components/Authorization/AuthorizationModal';

const App = () => {
  const currentPage = useAppSelector((state) => state.changeCurrentPage.currentPage);
  const cardsPerPage = useAppSelector((state) => state.setCardsPerPage.cardsPerPage);
  const movieData = useAppSelector((state) => state.setSortedCards.sortedCards);
  const selectValue = useAppSelector((state) => state.setFilterValue.selectValue);
  const yearSelectValue = useAppSelector((state) => state.setYearFilterValue.yearFilterValue);
  const authorizationModal = useAppSelector((state) => state.showAuthorizationModal.authorizModal);
  const dispatch = useAppDispatch();
  const sortedMovies = movieData.sort((a: any, b: any) => {
    if (selectValue === 'Популярные по убыванию') {
      return b.popularity - a.popularity;
    }
    if (selectValue === 'Рейтинг по убыванию') {
      return b.vote_average - a.vote_average;
    }
    if (selectValue === 'Рейтинг по возрастанию') {
      return a.vote_average - b.vote_average;
    }
    if (selectValue === 'Популярные по возрастанию') {
      return a.popularity - b.popularity;
    }
    return a.popularity - b.popularity;
  }).filter((item: any) => item.release_date.split('-')[0].includes(String(yearSelectValue)));

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = sortedMovies.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    const isLogined = JSON.parse(localStorage.getItem('isLogined') as string);
    if (isLogined) { dispatch({ type: 'login', payload: true }); }
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">

        <Filters />
        <MovieList movies={currentCards} />
        <AuthorizationModal show={authorizationModal} />
      </div>

    </div>

  );
};

export default App;
