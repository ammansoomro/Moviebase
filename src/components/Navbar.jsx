import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./Search"
import { BiSearchAlt } from "react-icons/bi"
function Navbar() {
  return (
    <Nav>
      <Link to="/">
        <h1>MovieBase</h1>
      </Link>
      <Search>
        <Navlist>
          <Link to="/AllMovies">
            <li>All Movies</li>
          </Link>
        </Navlist>
        <SearchBar />
      </Search>
    </Nav>
  );
}
const Search = styled.div`
  display: flex;
`;
const Nav = styled.div`
  background: #050508;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 5rem;
  h1 {
    font-family: "Blanka", sans-serif;
    font-size: 2.3rem;
    letter-spacing: 0.2rem;
    color: #b40101;
    font-weight: 500;
  }
`;

const Navlist = styled.ul`
  display: flex;
  li {
    font-family: "Blanka", sans-serif;
    padding: 0.5rem 2rem;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: all ease 0.8s;
  }
  li:hover {
    color: #b40101;
  }
`;

export default Navbar;
