import React from 'react';

const Movie = ({ title, year, poster, type }) => {
  return (
    <div className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {
          poster === 'N/A' ?
            <img alt="img" className="activator" src={`https://via.placeholder.com/300x436?text=${title}`} />
            : <img alt="img" src={poster} />
        }
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>{year}<span className="right">{type}</span></p>
      </div>
    </div>
  );
};

export default Movie;
