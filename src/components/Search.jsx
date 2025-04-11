import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Search.scss';

function Search() {
    const [search, setsearch] = useState(" ");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate("Searched/" + search)
    }

    return (
        <div className="search">
            <form onSubmit={submitHandler}>
                <input
                    className="search__input"
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    type="text"
                    placeholder="Quick Search"
                />
            </form>
        </div>
    );
}

export default Search;
