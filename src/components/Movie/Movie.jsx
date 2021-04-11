import React, { useState, useRef } from 'react';

import { useOutsideClick } from '../../utils/hooks/useOutsideClick';

import styles from './Movie.module.scss';

const Movie = ({ movie, handleOnClick }) => {
  const [isPosterOpen, setPosterOpen] = useState(false);

  const imageUrl = movie.Poster === 'N/A' ? '/images/not-found.png' : movie.Poster;
  return (
    <div className={styles.movie__wrapper}>
      <div className={styles['movie__wrapper--header']}>
        <img
          src={imageUrl}
          alt="Movie Poster"
          height="250px"
          width="100%"
          onClick={() => setPosterOpen(true)}
        />
        <h1 onClick={handleOnClick}>{movie.Title}</h1>
      </div>
      <p>Type: {movie.Type}</p>
      <p>Release Date: {movie.Year}</p>
      {
        isPosterOpen && <ShowPosterView moviePoster={imageUrl} closeModal={() => setPosterOpen(false)} />
      }
    </div>
  );
};

export default Movie;

const ShowPosterView = ({ moviePoster, closeModal }) => {
  const ref = useRef();

  useOutsideClick(ref, () => {
    closeModal();
  });

  return (
    <div className={styles.movie__modal}>
      <div className={styles['movie__modal--content']} ref={ref}>
        <div className={styles.content__block}>
          <span onClick={closeModal}>✖</span>
          </div>
        <img src={moviePoster} alt="Movie Poster" />
      </div>
    </div>
  );
};
