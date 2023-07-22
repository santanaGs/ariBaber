import { FooterContent, FooterSection, IconsContainer, Logo, TextFooter, Zap, LinkZap } from './styled'

//Image

import insta from '../../assets/logo-instagram.svg';
import face from '../../assets/logo-facebook.svg';
import logo from '../../assets/logo.svg';
import zap from '../../assets/whatssapp.svg'

export const Footer = () => {
    return (
        <FooterSection>
            <LinkZap href='https://wa.me/5511977217373'>
            <Zap src={zap} alt="" />
            </LinkZap>
            <FooterContent>
                <IconsContainer>
                    <img src={insta} alt="" />
                    <img src={face} alt="" />
                </IconsContainer>
                <Logo src={logo} />
                <TextFooter>
                    Copyright© 2023 | Dev Barbearia  - Todos os direitos reservados.
                </TextFooter>
            </FooterContent>
        </FooterSection>
    )
}