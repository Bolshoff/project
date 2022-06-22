import React from 'react';
import './MovieCard.css';

function MovieCard() {
  return (
    <div className="movie-card">
      <div className="poster">Poster</div>
      <div className="description">
        <div className="usertools">rate, fav, mark</div>
        <div className="movie-title">Movie Title</div>
        <div className="detailed">Подробнее</div>
      </div>
    </div>
  );
}

export default MovieCard;
