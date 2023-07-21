import {FooterContent, FooterSection, IconsContainer, Logo} from './styled'

//Image

import insta from '../../assets/logo-instagram.svg';
import face from '../../assets/logo-facebook.svg';
import logo from '../../assets/logo.svg';

export const Footer = () => {
    return(
        <FooterSection>
            <FooterContent>
                <IconsContainer>
                    <img src={insta} alt="" />
                    <img src={face} alt="" />
                </IconsContainer>
                <Logo src={logo}/>
            </FooterContent>
        </FooterSection>
    )
}