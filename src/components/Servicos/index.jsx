
import { ServicesSection, Container, ServicesTitle, ServicesDescription, ServiceBox, ServiceImage, ServicePriceBox, ServicePrice, ServiceName, ServicesContainer } from './styles'

import cabelo from '../../assets/cabelo.png'
import barba from '../../assets/barba.png'
import completo from '../../assets/completo.png'

export const Servicos = () => {
    return (
        <ServicesSection>
            <Container>
                <ServicesTitle>SERVIÇOS</ServicesTitle>
                <ServicesDescription>Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non duis augue eros mattis a quis sem sodales.</ServicesDescription>
                <ServicesContainer>
                <Card img={cabelo} service='Corte de cabelo' price='R$ 45,00'/>
                <Card img={barba} service='Barba completa' price='R$ 35,00'/>
                <Card img={completo} service='Barba e cabelo' price='R$ 70,00'/>
                </ServicesContainer>
            </Container>
        </ServicesSection>
    )
}

const Card = (props) => {
    return (
       <ServiceBox>
            <ServiceImage src={props.img}/>
            <ServicePriceBox>
                <ServiceName>{props.service}</ServiceName>
                <ServicePrice>{props.price}</ServicePrice>
            </ServicePriceBox>
       </ServiceBox>
    )
}