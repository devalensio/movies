import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import styles from './Home.module.scss';

const Home = ({ dispatch, movies, isLoading, isError }) => {
  useEffect(() => {
    dispatch({
      type: 'GET_MOVIES',
      payload: {},
    });
  }, []);

  return (
    <div className={styles.home__wrapper}>
      {
        movies.map((movie, i) => {
          return (
            <div key={i}>
              <img src={movie.Poster} alt="test" />
              <p>Title: {movie.Title}</p>
              <p>Type: {movie.Type}</p>
              <p>Release Date: {movie.Year}</p>
              <hr />
            </div>
          );
        })
      }
    </div>
  );
};

const mapStateToProps = (state) => state.movies;

export default connect(mapStateToProps)(Home);
