import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="featured-card">
      <Link to={`/Movie/${movie.id}/${movie.slug}`}>
        <div className="card-image">
          <img src={movie.large_cover_image} alt={movie.title} />
        </div>

        <div className="card-hover body">
          <h1>{movie.genres[1]}</h1>
          <button className="btn">View Movie</button>
          <h3>{movie.runtime}mins</h3>
        </div>

        <div className="card-text">
          <span className="quality">Full HD</span>
          <div className="bottom">
            <div className="moviename">
              <span>{movie.year}</span>
              <strong>{movie.title}</strong>
            </div>
            <div className="rating">
              {movie.rating}/10
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"
                alt="IMDB Logo"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
