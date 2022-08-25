import styled from "styled-components";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
function MainSearch() {
    const [search, setsearch] = useState(" ");
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        navigate("/Searched/" + search)
    }
    return (
        <Searchbar>
            <form onSubmit={submitHandler}>
                <input class="search__input" value={search} onChange={(e) => setsearch(e.target.value)} type="text" placeholder="Quick Search" />
            </form>
        </Searchbar>
    )
}

const Searchbar = styled.div`
    display: block;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    
    input {
        width: 100%;
        padding: 0.5rem 0.5rem;
        transition: transform 250ms ease-in-out;
        font-size: 14px;
        line-height: 18px;
        color: white;
        background-color: #83828233;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 18px 18px;
        background-position: 99% center;
        border: none;
        border-bottom: 2px solid #b40101;
        transition: all 250ms ease-in-out;
        
        &::placeholder {
            color: rgba(250,250,250,0.5);
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-size: 0.75rem;
        }
        
        &:hover,
        &:focus {
            background-position: 100% center;
        }
    }
`;
export default MainSearch