import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FeaturedMovies.scss";

function FeaturedMovies() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const getFeaturedMovies = async () => {
      const url =
        "https://yts.mx/api/v2/list_movies.json?sort_by=rating&order_by=DESC&genre=animation";
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
      ).then((res) => res.json());
      const data = JSON.parse(response.contents);
      setFeatured(data.data.movies);
    };

    getFeaturedMovies();
  }, []);

  return (
    <div className="wrapper">
      <div className="section-heading">
        <h1>Top Animated Movies</h1>
      </div>
      <Splide
        options={{
          perPage: 4,
          perMove: 4,
          pagination: false,
          arrows: true,
          focus: "center",
          gap: "5rem",
        }}
      >
        {featured.map((movie) => (
          <SplideSlide key={movie.id}>
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
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default FeaturedMovies;
