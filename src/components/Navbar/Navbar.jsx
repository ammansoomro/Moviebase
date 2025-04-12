import { Link } from "react-router-dom";
import SearchBar from "../Search/Search";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="nav bg-neutral-100 flex flex-align-center flex-justify-between py-base px-xl">
      <Link to="/">
        <div className="heading-2 blanka color-primary">MovieBase</div>
      </Link>
      <div className="flex flex-align-center gap-base">
        <Link to="/movies">
          <div className="blanka highlight base-white list-item">
            All Movies
          </div>
        </Link>
        <div className="search-wrapper">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
