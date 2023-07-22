import styled from 'styled-components'

export const ServicesSection = styled.div`
`
export const Container = styled.div`
    width: min(90%, 85.5rem);
    margin-inline: auto;
    padding: 1rem;

    @media screen and (max-width: 768px) {
        width: 354px;
    }
`

export const ServicesTitle = styled.h2`
    font-family: Inter;
    font-size: 44px;
    font-weight: 700;
    line-height: 66px;
    letter-spacing: 0em;
    text-align: center;
    color: #06121E;
`

export const ServicesDescription = styled.p `
    color: #323232;
    text-align: center;
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.6875rem */
    width: 52.25rem;
    margin-inline: auto;
    margin-block: 1.5rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`

export const ServiceBox = styled.div`
    width: 22.125rem;
    height: 24.313rem;
    filter: drop-shadow(4px 6px 14px rgba(0, 0, 0, 0.15));
`

export const ServiceImage = styled.img`
    width: 100%;
`
export const ServicePriceBox = styled.div`
    width: 22.125rem;
    max-height: 4.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0rem 0rem 1rem 1rem;
    background: #FFF;
    padding: 1rem;

    @media screen and (max-width: 768px) {
        width: 354px;
    }
`

export const ServiceName = styled.p`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`

export const ServicePrice = styled.p`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 
    border-radius: 0.5rem;
    background: linear-gradient(180deg, #D94140 0%, #D94140 100%);
    padding: 1rem;
`

export const ServicesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-block: 3rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`