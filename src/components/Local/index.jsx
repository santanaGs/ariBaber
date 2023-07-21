import { LocalSection, LocalTitle, Iframe } from "./styled"

export const Local = () => {
    return (
        <LocalSection>
            <LocalTitle>
                Venha Conhecer
            </LocalTitle>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8732276942674!2d-46.572675923676584!3d-23.608879063341487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cf3ceb9c1b9%3A0x8d02179e40f2a660!2sR.%20Helo%C3%ADsa%20Pamplona%2C%20514%20-%20Funda%C3%A7%C3%A3o%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009520-320!5e0!3m2!1spt-BR!2sbr!4v1689940445045!5m2!1spt-BR!2sbr" width="100%" height="550" style={{border:0}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
        </LocalSection>
    )
}