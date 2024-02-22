import { useEffect, useState } from 'react'

import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import { useGetFeaturesFoodQuery } from '../../services/api'

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const { data: food } = useGetFeaturesFoodQuery()

  if (food) {
    return (
      <>
        <Header />
        <ProductList foods={food} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
