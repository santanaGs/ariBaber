import React from "react";

//Styled Components
import { Background, Button, ButtonContact, Container, IconContainer, Logo, NavContainer, TextContainer, Time, TitleButtonContact, TitlePage } from "./styles";

//Images
import insta from '../../assets/logo-instagram.svg';
import face from '../../assets/logo-facebook.svg';
import logo from '../../assets/logo.svg';


export const Header = () => {
    return (
        <Background>
            <Container>
                <NavContainer>
                    <IconContainer>
                        <a href=""><img src={insta} alt="logo do instagram" /></a>
                        <a href=""><img src={face} alt="logo do facebook" /></a>
                    </IconContainer>
                    <ButtonContact>
                        <TitleButtonContact href="https://wa.me/5511977217373">
                            Agendar horarário
                        </TitleButtonContact>
                    </ButtonContact>
                </NavContainer>
                <Logo src={logo} alt='' />
                <TextContainer>
                    <TitlePage>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</TitlePage>
                    <Time>Horário de funcionamento: 09:00 ás 19:00</Time>
                    <Button href="https://wa.me/511977217373">Agendar horário</Button>
                </TextContainer>
            </Container>
        </Background>
    )
}