import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Search.scss';

function Search() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
  
    const submitHandler = (e) => {
      e.preventDefault();
      if (search.trim()) {
        navigate(`/movies/search/${search}`);
      } else {
        navigate("/movies");
      }
    };
  
    return (
      <div className="search">
        <form onSubmit={submitHandler}>
          <input
            className="search__input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Quick Search"
          />
        </form>
      </div>
    );
}

export default Search;
