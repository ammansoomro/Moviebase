import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useState, useEffect } from "react";
import "./MovieCarousel.scss";
import MovieCard from "./MovieCard";

const MovieCarousel = ({ title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let apiUrl = "";

        if (title === "Recently Added") {
          apiUrl =
            "https://yts.mx/api/v2/list_movies.json?sort_by=date_added&order_by=DESC";
        } else if (title === "Top Animated Movies") {
          apiUrl =
            "https://yts.mx/api/v2/list_movies.json?sort_by=rating&order_by=DESC&genre=animation";
        } else {
          console.warn("No API configured for this title");
          return;
        }

        const wrappedUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
        const response = await fetch(wrappedUrl);
        const result = await response.json();
        const data = JSON.parse(result.contents);

        setMovies(data.data.movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [title]);

  return (
    <div className="wrapper">
      <div className="section-heading">
        <h1>{title}</h1>
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
        {movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieCarousel;
