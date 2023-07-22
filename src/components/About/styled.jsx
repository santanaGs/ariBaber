import styled from 'styled-components'

export const AboutContainer = styled.div`
    background-color: #06121E;
    width: 100%;
    height: 40.625rem;
`

export const Container = styled.div`
    width: min(90%, 85.5rem);
    margin-inline: auto;
    padding: 1rem;
`
export const AboutContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`

export const ImagesContainer = styled.div`
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
    
`

export const Image = styled.img`
    width: 570px;
    height: 529px;

    @media screen and (max-width: 768px){
        width: calc(529px/2);
        height: calc(490.95px/2);
    }
`

export const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const AboutTitle = styled.h2`
    color: #FFF;
    text-align: left;
    text-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.45);
    font-family: Inter;
    font-size: 2.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 4.125rem */   

    @media screen and (max-width: 768px) {
        font-size: 2rem;
        width: 100%;
    }
`

export const AboutDescription = styled.p`
    color: #FFF;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    @media screen and (max-width: 768px) {
        text-align: justify;
        font-size: 1rem;
    }
`