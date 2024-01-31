import { Banner, Category, Restaurant } from './styles'

import { Food } from '../../pages/Home'

type Props = {
  food: Food
}

const Hero = ({ food }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${food.capa})` }}>
      <div className="container">
        <Category>{food.tipo}</Category>
        <Restaurant>{food.titulo}</Restaurant>
      </div>
    </Banner>
  )
}

export default Hero
