
import { ServicesSection, Container, ServicesTitle, ServicesDescription, ServiceBox, ServiceImage, ServicePriceBox, ServicePrice, ServiceName, ServicesContainer, TextContainer, Links } from './styles'

import cabelo from '../../assets/cabelo.png'
import barba from '../../assets/barba.png'
import completo from '../../assets/completo.png'

export const Servicos = () => {
    return (
        <ServicesSection>
            <Container>

                <TextContainer>
                    <ServicesTitle>SERVIÇOS</ServicesTitle>
                    <ServicesDescription>Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non duis augue eros mattis a quis sem sodales.</ServicesDescription>
                </TextContainer>
                <ServicesContainer>
                    <Card img={cabelo} service='Corte de cabelo' price='R$ 45,00' link='https://api.whatsapp.com/send?phone=5511977217373&text=Olá,%20gostaria%20de%20agendar%20horário%20para%20corte%20de%20cabelo!' />
                    <Card img={barba} service='Barba completa' price='R$ 35,00' link='https://api.whatsapp.com/send?phone=5511977217373&text=Olá,%20gostaria%20de%20marcar%20para%20fazer%20a%20barba!' />
                    <Card img={completo} service='Barba e cabelo' price='R$ 70,00' link='https://api.whatsapp.com/send?phone=5511977217373&text=Olá,%20gostaria%20de%20marcar%20barba%20e%20cabelo!' />
                </ServicesContainer>
            </Container>
        </ServicesSection>
    )
}

const Card = (props) => {
    return (
        <ServiceBox>
            <ServiceImage src={props.img} />
            <ServicePriceBox>
                <ServiceName>{props.service}</ServiceName>
                <Links href={props.link}>
                    <ServicePrice>
                        {props.price}
                    </ServicePrice>
                </Links>
            </ServicePriceBox>
        </ServiceBox>
    )
}