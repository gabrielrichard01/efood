import bannerImg from '../../assets/images/trattoria/fundo-tratoria.jpg'
import { Banner, Category, Restaurant } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Category>Italiana</Category>
      <Restaurant>La Vitta Trattoria</Restaurant>
    </div>
  </Banner>
)

export default Hero
