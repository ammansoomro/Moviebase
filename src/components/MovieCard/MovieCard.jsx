import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
import Btn from "../Btn/Btn";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/Movie/${movie.id}/${movie.slug}`}>
        <div className="w-full h-full">
          <img
            className="w-full h-full "
            src={movie.large_cover_image}
            alt={movie.title}
          />
        </div>

        <div className="card-hover flex-center gap-xl flex-col">
          <div className="feature-bold">{movie.genres[1]}</div>
          <Btn label="View More" />
          <div className="highlight-accent">{movie.runtime}mins</div>
        </div>

        <div className="card-content flex flex-col flex-align-start flex-justify-between p-base">
          <div></div>
          <div className="bottom">
            <div className="text-left flex flex-col gap-sm flex-align-start">
              <span>{movie.year}</span>
              <strong className="movie-title">{movie.title}</strong>
            </div>
            <div className="rating flex flex-align-center">
              {movie.rating}/10
              <img
                className="imdb-logo"
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
