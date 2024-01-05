import { HeaderBar, HeaderText, Logo } from './styles'

import logo from '../../assets/images/header/logo.png'
import fundo from '../../assets/images/header/fundo.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <Logo src={logo} alt="efood" />
      <HeaderText>
        Viva experiências gastronômicas no conforto da sua casa
      </HeaderText>
    </div>
  </HeaderBar>
)

export default Header
