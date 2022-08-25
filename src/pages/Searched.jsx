import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import SearchBar from "../components/MainSearch"

function AllMovies() {



    const [AllMovies, setAllMovies] = useState([]);
    const [MovieCount, setMovieCount] = useState(0);
    let param = useParams();



    useEffect(() => {
        const getFeaturedMovies = async (search) => {
            const url = `https://yts.torrentbay.to/api/v2/list_movies.json?query_term=${search}`;
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`).then((response) => response.json());
            let data = JSON.parse(response.contents);
            console.log(data);
            setAllMovies(data.data.movies);
            setMovieCount(data.data.movie_count);
        };
        getFeaturedMovies(param.search);
    }, [param.search]);



    const fetchMovies = async (Search, CurrentPage) => {
        const url = "https://yts.torrentbay.to/api/v2/list_movies.json?query_term=" + Search + "&limit=20&page=" + CurrentPage
        console.log(url);
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`).then((response) => response.json());
        let data = JSON.parse(response.contents);
        console.log(data);
        setAllMovies(data.data.movies);
    }



    const handlePageClick = async (data) => {
        let CurrentPage = data.selected + 1;
        console.log(CurrentPage);
        const moviesFromServer = await fetchMovies(param.search, CurrentPage);
    }



    return (
        <Wrapper>
            <SearchBar />
            <StyledPaginateContainer>
                <ReactPaginate
                    previousLabel={'Prev'}
                    nexLabel={'Next'}
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
            </StyledPaginateContainer>
            <Grid
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {
                    AllMovies.map((movie) => {
                        return (
                            <Card key={movie.id}>
                                <Link to={/Movie/ + movie.id + "/" + movie.slug}>
                                    <CardImage>
                                        <img src={movie.large_cover_image} alt={movie.title} />
                                    </CardImage>
                                    <CardHover className="body">
                                        <h2>{movie.genres[0]}</h2>
                                        <button className="btn">View Movie</button>
                                        <h4>{movie.runtime}mins</h4>
                                    </CardHover>
                                    <CardText>
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
                                    </CardText>
                                </Link>
                            </Card>
                        );
                    })
                }
            </Grid>
        </Wrapper>
    )
}

const StyledPaginateContainer = styled.div`
  .pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  cursor: pointer;
  padding: 1rem 0.2rem;
}

.pagination a {
  padding: 10px;
  border-radius: 0.3rem;
  border: 1px solid #c5070a;

  color: #c5070a;
}

.pagination__link {
  font-weight: bold;
}

.pagination__link--active a {
  color: #fff;
  background: #c5070a;
}

.pagination__link--disabled a {
  color: rgb(198, 197, 202);
  border: 1px solid rgb(198, 197, 202);
}
`;
const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 2rem;
`;
// ========== Setting Margin ==========
const Wrapper = styled.div`
  margin: 4rem 8rem;
`;


// ========== Slider Item Card ==========
const Card = styled.div`
  width: 200px;
  height: 270px;
  position: relative;
  border-radius: 0.5rem;
  border: 0.3rem solid white;
  transition: all ease 0.3s;
  &:hover {
    border: 0.3rem solid #c5070a;
  }

  &:hover .body {
    opacity: 1;
  }
`;

// ==========  Card Image ==========
const CardImage = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: center;
  }
`;

// ==========  Card Text ==========
const CardText = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    360deg,
    #161616b9 35%,
    rgba(73, 73, 73, 0.23) 64%
  );
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
  justify-content: space-between;

  // ==========  HD Label Text ==========
  .quality {
    background-color: #e70634;
    color: #080808;
    font-weight: 600;
    padding: 0px 0.5rem;
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    border-radius: 4px;
    opacity: 0;
  }

  // ==========  Movie Name ==========
  .moviename {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .moviename strong {
    font-size: 1rem;
    line-height: 20px;
    margin-top: 10px;
    color: #dfdfdf;
    letter-spacing: 0.5px;
  }

  // ==========  Rating ==========
  .rating {
    display: flex;
    align-items: center;
    justify-content: flex;
    letter-spacing: 0.1rem;
    img {
      height: 2rem;
      width: 2.4rem;
      object-fit: contain;
      object-position: center;
      margin: 0px 10px;
    }
  }
`;

const CardHover = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  transition: 0.5s;
  padding: 10px;
  background: linear-gradient(90deg, #000000b5 100%, #fafafa 0%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  h2 {
    margin-top: 30%;
  }
  h4 {
    margin-bottom: 40%;
  }
  .btn {
    border: none;
    outline: 2px solid #d3060a;
    background: transparent;
    color: #d3060a;
    cursor: pointer;
    font-weight: bold;
    padding: 5px 10px;
    transition: 0.4s;
  }
  .btn:hover{
    color: #a30507;
    outline: 2px solid #a30507;
  }
`;


export default AllMovies