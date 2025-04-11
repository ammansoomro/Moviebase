import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
function Movie() {
  const [item, setItem] = useState([]);
  const [genre, setgenre] = useState([]);
  const [description, setdescription] = useState(" ");
  const [torrents, settorrents] = useState([]);
  let param = useParams();
  useEffect(() => {
    const getItem = async (id) => {
      const response = await fetch(
        `https://api.allorigins.win/raw?url=https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      ).then((response) => response.json());
      setItem(response.data.movie);
      setgenre(response.data.movie.genres)
      setdescription(response.data.movie.description_full)
      settorrents(response.data.movie.torrents);
    };
    getItem(param.id);
  }, [param.id]);


  return (
    <Wrapper>
      <MovieBanner>
        <Image>
          <img
            src={item.background_image_original}
            alt={item.title}
          />
        </Image>
        <Container>
          <div className="title-container">
            <div className="title-top">
              <div className="movie-title">
                <h1>{item.title}</h1>
              </div>
              <div className="about">
                <div className="rating">
                  {item.rating}/10
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"
                    alt="IMDB Logo"
                  />
                </div>
                <span>({item.year})</span>
                <span>{item.runtime}mins</span>
              </div>
              <div className="moviedescription">
                <p>{description.substring(0, 965)}</p>
              </div>
            </div>
            <div className="title-bottom">
              <div className="category">
                <div>
                  <strong>Genres: </strong>
                  <ul>
                    {genre.map((listitem) => {
                      return (
                        <li key={listitem}>{listitem} |</li>
                      )
                    })}
                  </ul>
                </div>
                <div>
                  {torrents.map((item) => {
                    return (
                      <a href={item.url} key={item.url}>
                        <button className="btn">{item.quality}.{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</button>
                      </a>
                    )
                  })}

                </div>
              </div>
            </div>
          </div>
        </Container>
        <Card>
          <CardImage>
            <img src={item.medium_cover_image} alt="Please Wait, Fetching Data..." />
          </CardImage>
        </Card>
      </MovieBanner>
      <MovieDetails>
        <Trailer>
          <strong>Trailer</strong>
          <iframe width="660" height="350" src={"https://www.youtube-nocookie.com/embed/" + item.yt_trailer_code} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Trailer>
      </MovieDetails>
    </Wrapper>

  );
}

const Wrapper = styled.div`
  margin: 0rem 1rem;
`;

const MovieBanner = styled.div`
  width: 100%;
  margin: 10px auto;
  max-width: 1200px;
  min-height: 520px;
  max-height: 520px;
  padding: 70px 50px;
  position: relative;
  display: flex;
  justify-content:center;

  &::after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(32, 32, 32, 0.7);
    background: linear-gradient(0deg, rgb(8, 8, 8) 0%, rgba(0, 0, 0, 0.6) 100%);
  }
`;

const Image = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(32, 32, 32, 0.7);
    background: linear-gradient(
      -90deg,
      rgba(37, 37, 37, 0.2) 0%,
      rgba(15, 15, 15, 0.3) 100%
    );
  }
`;

const Container = styled.div`
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  position: relative;

  .title-container {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title-container p{
    position: relative;
    margin: 1.5rem 0;
    color: #747474;
    width: 180%;
    text-align: justify;
}
  .movie-title h1 {
    color: #ffffff;
    font-weight: 600;
    font-size: 2.3rem;
    font-family: "Blanka", sans-serif;
    line-height: 40px;
    letter-spacing: 1px;
  }
  .about {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    flex-wrap: wrap;
    color: #e9e9e9;
  }
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
  .about span {
    margin-right: 1.1rem;
    letter-spacing: 1px;
    font-size: 0.8rem;
  }

  .title-bottom{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  .btn {
    border: none;
    outline: 2px solid #d3060a;
    background: transparent;
    color: #d3060a;
    cursor: pointer;
    font-weight: bold;
    padding: 5px 4px;
    transition: 0.4s;
    margin-top: 1rem;
    margin-right: 0.9rem;
  }
  .btn:hover{
    color: #a30507;
    outline: 2px solid #a30507;
  }
  li{
    float: left;
    display: block;
  color: white;
  text-align: center;  
  font-weight: bold;
    color: #d3060a;
    font-size: 0.8rem;
}

li:not(:first-child){
      padding: 0rem 0.2rem;
  }
  .category{
    margin-right: 40px;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
}
.category strong{
    font-weight: 500;
    color: #ffffff;
  }
`;



const MovieDetails = styled.section`
width: 100%;
max-width: 1000px;
margin: 2rem auto 1rem auto;
padding: 2rem;
display: flex;
flex-direction: column;
text-align: center;
p{
    margin: 1rem 0;
    color: #747474;
}
`;

const Trailer = styled.section`
width: 100%;
max-width: 800px;
margin: 0rem auto 3.5rem auto;
display: flex;  
justify-content: flex-start;
align-items:center;
flex-direction: column;
strong{
    /* color: #d3060a; */
    color: #FFFFFF;
    font-family: "Blanka", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    padding: 1.2rem;
}
`;
const Card = styled.div`
  z-index: 2;
  width: 300px;
  height: 350px;
  position: relative;
  border-radius: 1rem;
  margin-top: 1rem;
`;

// ==========  Card Image ==========
const CardImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: center;
  }
`;
export default Movie;
