import React from "react";

//Images

import img1 from '../../assets/images.png';


import { AboutContainer, AboutContent, AboutDescription, AboutTitle, Container, Image, ImagesContainer, TextContainer } from "./styled";

export const About = () => {
    return (
        <AboutContainer>
            <Container>
                <AboutContent>
                    <ImagesContainer>
                        <Image src={img1} alt="imagem 1" />
                    </ImagesContainer>
                    <TextContainer>
                        <AboutTitle>SOBRE</AboutTitle>
                        <AboutDescription>Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non duis augue eros mattis a quis sem sodales.</AboutDescription>
                        <AboutDescription>Horário de funcionamento: 09:00 ás 19:00
                        </AboutDescription>
                    </TextContainer>
                </AboutContent>
            </Container>
        </AboutContainer>
    )
}