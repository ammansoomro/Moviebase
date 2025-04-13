import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.scss";
import Btn from "../../components/Btn/Btn";

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
      setgenre(response.data.movie.genres);
      setdescription(response.data.movie.description_full);
      settorrents(response.data.movie.torrents);
    };
    getItem(param.id);
  }, [param.id]);

  return (
    <div className="p-xl">
      <div className="movie-banner p-xxl">
        <div className="image">
          <img src={item.background_image_original} alt={item.title} />
        </div>
        <div className="container">
          <div className="title-container">
            <div className="title-top">
              <div className="movie-title ">
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
            <div className="flex flex-col gap-m">
              <div className="highlight-bold">Genres: </div>
              <div>
                {genre.map((listitem, index) => (
                  <span className="highlight color-primary" key={listitem}>
                    {listitem}
                    {index !== genre.length - 1 && " | "}
                  </span>
                ))}
              </div>

              <div className="flex gap-base">
                {torrents.map((item) => (
                  <a href={item.url} key={item.url}>
                    <Btn
                      label={`${item.quality}.${
                        item.type.charAt(0).toUpperCase() + item.type.slice(1)
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-main-card">
          <div className="card-image">
            <img
              src={item.medium_cover_image}
              alt="Please Wait, Fetching Data..."
            />
          </div>
        </div>
      </div>
      <section className="movie-details">
        <section className="trailer">
          <strong>Trailer</strong>
          <iframe
            width="660"
            height="350"
            src={`https://www.youtube-nocookie.com/embed/${item.yt_trailer_code}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </section>
    </div>
  );
}

export default Movie;
