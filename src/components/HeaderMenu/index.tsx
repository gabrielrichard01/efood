import { Link } from 'react-router-dom'

import { HeaderPerfil, Links, Menu } from './styles'

import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/fundo.png'

const HeaderMenu = () => (
  <HeaderPerfil style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <Menu>
        <div>
          <Links href="#">Restaurantes</Links>
        </div>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div>
          <Links href="#">0 - produtos(s) no carrinho</Links>
        </div>
      </Menu>
    </div>
  </HeaderPerfil>
)

export default HeaderMenu
