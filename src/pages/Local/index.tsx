import CardapioLista from '../../components/MenuList'
import HeaderRestaurante from '../../components/HeaderRestaurant'

import Cart from '../../components/Cart'
import { useGetCardapioQuery } from '../../services/api'
import { useParams } from 'react-router-dom'

const Local = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetCardapioQuery(id!)
  if (!cardapio) {
    return (
      <>
        <h3>Carregando...</h3>
      </>
    )
  }
  return (
    <>
      <HeaderRestaurante />
      <CardapioLista />
      <Cart />
    </>
  )
}

export default Local
