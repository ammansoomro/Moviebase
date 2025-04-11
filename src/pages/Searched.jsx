import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';
import SearchBar from "../components/MainSearch";
import "./Searched.scss";

function Searched() {
  const [Searched, setSearched] = useState([]);
  const [MovieCount, setMovieCount] = useState(0);
  let param = useParams();

  useEffect(() => {
    const getFeaturedMovies = async (search) => {
      const url = `https://yts.mx/api/v2/list_movies.json?query_term=${search}`;
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`).then((response) => response.json());
      let data = JSON.parse(response.contents);
      setSearched(data.data.movies);
      setMovieCount(data.data.movie_count);
    };
    getFeaturedMovies(param.search);
  }, [param.search]);

  const fetchMovies = async (Search, CurrentPage) => {
    const url = `https://yts.mx/api/v2/list_movies.json?query_term=${Search}&limit=20&page=${CurrentPage}`;
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`).then((response) => response.json());
    let data = JSON.parse(response.contents);
    setSearched(data.data.movies);
  }

  const handlePageClick = async (data) => {
    let CurrentPage = data.selected + 1;
    await fetchMovies(param.search, CurrentPage);
  }

  return (
    <div className="wrapper">
      <SearchBar />
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          onPageChange={handlePageClick}
          pageCount={MovieCount / 20}
          containerClassName={'pagination'}
          pageClassName={'pagination'}
          previousClassName={'pagination'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
          nextClassName={'pagination'}
          breakClassName={'pagination'}
          breakLinkClassName={'pagination'}
          disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active'}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
        />
      </div>
      <motion.div
        className="grid"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Searched.map((movie) => (
          <div className="card" key={movie.id}>
            <Link to={`/Movie/${movie.id}/${movie.slug}`}>
              <div className="card-image">
                <img src={movie.large_cover_image} alt={movie.title} />
              </div>
              <div className="card-hover body">
                <h2>{movie.genres[0]}</h2>
                <button className="btn">View Movie</button>
                <h4>{movie.runtime}mins</h4>
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png" alt="IMDB Logo" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Searched;
