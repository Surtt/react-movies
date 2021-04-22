import React from 'react';
import Movie from './Movie';

const Movies = ({ movies = [] }) => {
  return (
    <div className='movies'>
      {movies.length ? (
        movies.map(({ imdbID, Title, Year, Poster, Type }) => (
          <Movie
            key={imdbID}
            title={Title}
            year={Year}
            poster={Poster}
            type={Type}
          />
        ))
      ) : (
        <h4>Nothing Found</h4>
      )}
    </div>
  );
};

export default Movies;
