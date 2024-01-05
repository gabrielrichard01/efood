import { ButtonWhite, CardMenu, Descricao, ImageCard, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
  button: string
}

const ProductMenu = ({ title, description, image, button }: Props) => (
  <div className="container">
    <CardMenu>
      <ImageCard src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <ButtonWhite href="#">{button}</ButtonWhite>
    </CardMenu>
  </div>
)

export default ProductMenu
