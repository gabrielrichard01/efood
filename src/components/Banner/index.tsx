import { Category, ImageFundo, Name } from './styles'

type Props = {
  backgroundImg: string
  category: string
  name: string
}

const Banner = ({ backgroundImg, category, name }: Props) => (
  <ImageFundo style={{ backgroundImage: `url(${backgroundImg})` }}>
    <div className="container">
      <Category>{category}</Category>
      <Name>{name}</Name>
    </div>
  </ImageFundo>
)

export default Banner
