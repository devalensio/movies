import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import styles from './MovieDetail.module.scss';

const MovieDetail = ({ dispatch, history, match, movieDetail }) => {
  useEffect(() => {
    dispatch({
      type: 'GET_MOVIE_DETAIL',
      payload: { movieId: match.params.id },
    })

    return () => dispatch({
      type: 'RESET_MOVIE_DETAIL',
      payload: {},
    });
  }, []);

  return (
    <div className={styles.movie__detail}>
      <div className={styles['movie__detail--header']}>
        <div className={styles.header__icon} onClick={() => history.goBack()}>
          <img src="/images/back-arrow.png" alt="search-icon" width="16px" height="16px" />
        </div>
        <h2>Movie Detail</h2>
      </div>
      <div className={styles['movie__detail--body']}>
        <img src={movieDetail.Poster === 'N/A' ? '/images/not-found.png' : movieDetail.Poster} alt="Movie Poster" />
        <h1>{movieDetail.Title}</h1>
      </div>
      <p>Type: {movieDetail.Type || '-'}</p>
      <p>Release Date: {movieDetail.Year || '-'}</p>
      <p>Genre: {movieDetail.Genre || '-'}</p>
      <p>Language: {movieDetail.Language || '-'}</p>
      <p>Origin: {movieDetail.Country || '-'}</p>
      <p>Story: {movieDetail.Plot || '-'}</p>
    </div>
  );
};

const mapStateToProps = (state) => state.movies;

export default connect(mapStateToProps)(MovieDetail);
