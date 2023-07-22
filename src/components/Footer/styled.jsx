import styled from 'styled-components'

export const FooterSection = styled.footer`
    width: 100%;
    background: #06121E;
`

export const FooterContent = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 2rem;
     padding: 3rem;
`

export const IconsContainer = styled.div`
    display: flex;
    gap: .5rem;
`

export const Logo = styled.img`

`

export const TextFooter = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media screen and (max-width: 768px) {
        font-size: .7rem;
        text-align: center;
    }
`

export const Zap = styled.img`
    position: fixed;
    bottom: 3%;
    right: 2%;

    @media screen and (max-width: 768px) {
        width: 50px;
        bottom: 5%;
    }
`

export const LinkZap = styled.a`

`