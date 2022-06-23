import React, { FC } from 'react';
import './MovieCard.css';
import { IMovies } from '../../../types/types';

interface MovieCardProps{
    movie: IMovies
}
const MovieCard:FC<MovieCardProps> = ({ movie }) => (
  <div className="movie-card" key={movie.id}>
    <div className="poster">{movie.poster_path}</div>
    <div className="description">
      <div className="usertools">
        {movie.vote_average}
        , fav, mark
      </div>
      <div className="movie-title">{movie.title}</div>
      <div className="detailed">Подробнее</div>
    </div>
  </div>
);

export default MovieCard;
