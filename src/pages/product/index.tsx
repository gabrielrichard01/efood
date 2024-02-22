import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Food } from '../Home'

import Hero from '../../components/Hero'
import HeaderMenu from '../../components/HeaderMenu'
import Cardapio from '../../components/Cardapio'
import {
  useGetCardapioItemQuery,
  useGetCardapioQuery,
  useGetFeaturesFoodQuery,
  useGetFoodQuery
} from '../../services/api'
import Cart from '../../components/Cart'

const Product = () => {
  const { id } = useParams()
  const { data: food } = useGetFoodQuery(id!)
  const { data: item } = useGetFeaturesFoodQuery()

  if (!food) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderMenu />
      <Hero food={food} />
      <Cardapio foods={food} name={food.tipo} items={food.cardapio} />
      <Cart />
    </>
  )
}

export default Product
