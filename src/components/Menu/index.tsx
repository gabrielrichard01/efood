import Button from '../Button'
import { CardCardapio } from './styles'

type Props = {
  image: string
  name: string
  description: string
}

const Menu = ({ image, name, description }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 180) {
      return descricao.slice(0, 177) + '...'
    }
    return descricao
  }

  return (
    <>
      <CardCardapio>
        <img src={image} />
        <h3>{name}</h3>
        <p>{getDescricao(description)}</p>
        <Button
          type="button"
          title="Clique aqui para ver mais"
          variant="primary"
        >
          Mais detalhes
        </Button>
      </CardCardapio>
    </>
  )
}

export default Menu
