import styled from "styled-components";

const StyledNoMovieFound = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 30rem;
    }

    h1{
        font-size: 2.5rem;
        margin-top: 2rem;
        color: white;
        text-align: center;
    }

    @media screen and (max-width: ${({theme}) => theme.tablet }){
    }

    @media screen and (max-width: ${({theme}) => theme.phone }){
        img {
            max-width: 95vw;
        }

        h1 {
            font-size: 2rem
        }
    }
`

export default StyledNoMovieFound;