import logo from '../../assets/images/header/logo.png'
import instagram from '../../assets/images/footer/instagram.png'
import facebook from '../../assets/images/footer/facebook.png'
import twitter from '../../assets/images/footer/twitter.png'
import { Container, Descricao, FooterLogo, RedesSociais } from './styles'
import { Link } from 'react-router-dom'

const Footer = () => (
  <Container>
    <div className="container">
      <div>
        <FooterLogo>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </FooterLogo>
        <RedesSociais>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </RedesSociais>
      </div>
      <Descricao>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Descricao>
    </div>
  </Container>
)

export default Footer
