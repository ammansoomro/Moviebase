import { Link } from "react-router-dom";
import SearchBar from "./Search";
import './Navbar.scss';

function Navbar() {
  return (
    <div className="nav">
      <Link to="/">
        <h1>MovieBase</h1>
      </Link>
      <div className="search">
        <ul className="navlist">
          <Link to="/AllMovies">
            <li>All Movies</li>
          </Link>
        </ul>
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;
