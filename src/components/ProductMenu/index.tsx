import Button from '../Button'
import { CardMenu, Descricao, ImageCard, Titulo } from './styles'

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
      <Button
        type="button"
        title="Clique aqui para ter mais detalhes"
        variant="primary"
      >
        {button}
      </Button>
    </CardMenu>
  </div>
)

export default ProductMenu
