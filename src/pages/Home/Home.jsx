import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import Movie from '../../components/Movie';
import SearchBar from '../../components/SearchBar';

import styles from './Home.module.scss';

export const Home = ({ dispatch, history, movies, isLoading, isError }) => {
  const [title, setTitle] = useState('Attack On Titan');
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  const seeDetailMovie = (id) => history.push(`/movies/${id}`);

  const loadMoreMovies = () => {
    dispatch({
      type: 'GET_MOVIES',
      payload: {
        page,
        title,
        withPrevious: true,
      },
      callback: () => {
        setPage(page + 1);
        setIsFetching(false);
      },
    });
  };

  const searchMovie = (searchInput) => {
    dispatch({
      type: 'GET_MOVIES',
      payload: {
        page: 1,
        title: searchInput,
      },
      callback: () => {
        setIsFetching(false);
        setTitle(searchInput);
      },
    });
  }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }

    setIsFetching(true);
  };

  useEffect(() => {
    if (isFetching) {
      loadMoreMovies();
    }
  }, [isFetching]);

  useEffect(() => {
    dispatch({
      type: 'GET_MOVIES',
      payload: { page, title },
      callback: () => setPage(page + 1),
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.home__wrapper}>
      <h2>Movie List</h2>
      <SearchBar searchMovie={searchMovie} />
      {
        (movies && movies.length)
          ? movies.map((movie, i) => (
            <Movie
              key={i}
              movie={movie}
              handleOnClick={() => seeDetailMovie(movie.imdbID)}
            />
          ))
          : <p>Movies not found ...</p>
      }
    </div>
  );
};

const mapStateToProps = (state) => state.movies;

export default connect(mapStateToProps)(Home);
