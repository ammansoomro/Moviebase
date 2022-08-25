import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
function FeaturedMovies() {
  const [Featured, setFeatured] = useState([]);

  useEffect(() => {
    const getFeaturedMovies = async () => {
      const url = "https://yts.torrentbay.to/api/v2/list_movies.json?sort_by=rating&order_by=DESC&genre=animation";
      console.log(url);
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`).then((response) => response.json());
      let data = JSON.parse(response.contents);
      console.log(data);
      setFeatured(data.data.movies);
    };
    getFeaturedMovies();
  }, []);

  return (
    <Wrapper>
      <SectionHeading>
        <h1>Top Animated Movies</h1>
      </SectionHeading>
      <Splide
        options={{
          // type: "loop",
          perPage: 4,
          perMove: 4,
          pagination: false,
          arrows: true,
          focus: "center",
          gap: "5rem",
        }}
      >
        {Featured.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <Card>
                <Link to={/Movie/ + movie.id + "/" + movie.slug}>
                  <CardImage>
                    <img src={movie.large_cover_image} alt={movie.title} />
                  </CardImage>
                  <CardHover className="body">
                    <h1>{movie.genres[1]}</h1>
                    <button className="btn">View Movie</button>
                    <h3>{movie.runtime}mins</h3>
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
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

// ========== Setting Margin ==========
const Wrapper = styled.div`
  margin: 4rem 5.5rem;
`;

// ========== Section Heading ==========
const SectionHeading = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 1rem 0rem;
  background: #0b0b0bc2;
  h1 {
    justify-content: center;
    font-family: "Blanka", sans-serif;
    color: #f6f6f6;
    /* color: #9f0101; */
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 5px;
  }
`;

// ========== Slider Item Card ==========
const Card = styled.div`
  width: 220px;
  height: 330px;
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
  place-items: center;
  flex-direction: column;
  h1 {
    margin-top: 30%;
  }
  h3 {
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
export default FeaturedMovies;
