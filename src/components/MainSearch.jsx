import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './MainSearch.scss';

function MainSearch() {
  const [search, setSearch] = useState(" ");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/Searched/" + search);
  };

  return (
    <div className="searchbar">
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

export default MainSearch;
