import Button from '../Button'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

import pizza from '../../assets/images/logo.png'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.cardapio.id}>
              <img src={item.cardapio.foto} />
              <div>
                <h3>{item.cardapio.nome}</h3>
                <span>{item.cardapio.preco}</span>
              </div>
              <button type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor Total</p>
          <p>R$ 182,70</p>
        </Prices>
        <Button title="Clique aqui para continuar com a entrega" type="button">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
