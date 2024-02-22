import { Link } from 'react-router-dom'

import { CartButton, HeaderPerfil, Links, Menu } from './styles'

import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/fundo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderMenu = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
            <CartButton onClick={openCart}>
              {items.length} - produtos(s) no carrinho
            </CartButton>
          </div>
        </Menu>
      </div>
    </HeaderPerfil>
  )
}

export default HeaderMenu
