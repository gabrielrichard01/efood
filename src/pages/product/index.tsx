import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Food } from '../Home'

import Hero from '../../components/Hero'
import HeaderMenu from '../../components/HeaderMenu'
import Cardapio from '../../components/Cardapio'

const Product = () => {
  const { id } = useParams()

  const [food, setFood] = useState<Food>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFood(res))
  }, [id])

  if (!food) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderMenu />
      <Hero food={food} />
      <Cardapio name={food.tipo} items={food.cardapio} />
    </>
  )
}

export default Product
