import { styled } from "styled-components";
import background from '../../assets/banner.jpg'

export const Background = styled.div`
    background: linear-gradient(180deg, #06121E 0%, rgba(6, 18, 30, 0.37) 36.74%, rgba(6, 18, 30, 0.29) 69.61%, #06121E 100%), url(${background}), lightgray -15px -164.265px / 102.014% 120.188%;
    background-size: cover;
    width: 100%;
    height: 50.9375rem;
    margin-inline: auto;
`

export const Container = styled.div`
    width: min(90%, 85.5rem);
    margin-inline: auto;
    padding: 1rem;
    position: relative;
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const IconContainer = styled.div`
    display: flex;
    gap: .3rem;
`
export const ButtonContact = styled.div`
    border-radius: .5rem;
    width: 10.4375rem;
    height: 2.375rem;
    border: 1.4px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TitleButtonContact = styled.a`
    color: #fff;
    font-family: Inter;
    font-size: 1.02713rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
`

export const Logo = styled.img`
    position: absolute;
    top: 0;
    left: 45%;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 54.5625rem;
    margin-inline: auto;
    align-items: center;
    padding-top: 15rem;
`

export const TitlePage = styled.h1`
    color: #FFF;
    text-align: center;
    text-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.45);
    font-family: Inter;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 4.5rem */

`

export const Time = styled.p`
    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.6875rem */
`

export const Button = styled.a`
    margin-top: 2rem;
    padding: 1rem 2.5rem;
    background: #0f2f4e;
    border: 1px solid transparent;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 2.25rem */
    text-decoration: none;
    border-radius: 1rem;
    transition: .3s;

    &:hover {
    background: #fff;
    color: #06121E;
    border: 1px solid #06121E;
  }
`
