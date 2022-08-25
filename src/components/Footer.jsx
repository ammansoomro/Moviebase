import styled from 'styled-components';
function Footer() {
    return (
        <Foot>
            <h1>
                MovieBase
            </h1>
            <Copyright>
                Copyright 2022 &copy;
            </Copyright>
        </Foot>
    )
}


const Foot = styled.div`
    background: black;
display: flex;
align-items: center ;
justify-content: space-between;
width: 100%;
padding: 1rem 4rem;

    h1{
        font-family: 'Blanka', sans-serif;
        font-size: 2.3rem;
        letter-spacing: 0.2rem;                     
        color: #b40101;
        font-weight:500;
        ;
    }
`;

const Copyright = styled.span`
color: #4d4d4d;
font-size: 1rem;
font-weight: 400;
`;

export default Footer