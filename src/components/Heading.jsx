import React from 'react'
import styled from "styled-components";

function Heading() {
    return (
        <Wrapper>
            <Content>
                <h1>Download YTS YIFY movies: HD smallest size</h1>
                <p>Welcome to the official MOVIEBASE website. Here you can browse and download movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.</p>
                <h4>IMPORTANT - MOVIEBASE is developed using official YTS API</h4>
            </Content>
        </Wrapper>
    )
}
const Wrapper = styled.div`
  margin: 0.5rem 5rem;
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
        font-size: 3.1rem;
        padding: 0.5rem 0rem;
    }
    p{
        text-align:center;
        width: 60%;
        padding: 0.5rem 0rem;
        color: #70797d;
        font-weight: 400;
    }
    h4{
        padding: 0.5rem 0rem;
        color: #a20909;
    }
`;
export default Heading