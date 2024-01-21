import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import HeaderMenu from '../../components/HeaderMenu'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <HeaderMenu />
      <Hero />
    </>
  )
}

export default Product
