import React, { Component } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  searchMovies = async (value, type = 'all') => {
    this.setState({ loading: true });
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    );
    const data = await response.json();
    this.setState({ movies: data.Search, loading: false });
  };

  async componentDidMount() {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`
    );
    const movies = await response.json();
    this.setState({ movies: movies.Search, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export default Main;
