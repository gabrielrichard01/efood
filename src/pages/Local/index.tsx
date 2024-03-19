import { useParams } from 'react-router-dom'

import MenuList from '../../components/MenuList'
import HeaderRestaurant from '../../components/HeaderRestaurant'
import Loader from '../../components/Loader'
import Checkout from '../Checkout'

import Cart from '../../components/Cart'
import { useGetCardapioQuery } from '../../services/api'

const Local = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetCardapioQuery(id!)
  if (!cardapio) {
    return <Loader />
  }

  return (
    <>
      <HeaderRestaurant />
      <MenuList />
      <Cart />
      <Checkout />
    </>
  )
}

export default Local
