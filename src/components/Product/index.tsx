import Button from '../Button'
import Tag from '../Tag'

import imageStar from '../../assets/images/estrela.png'

import {
  Card,
  Content,
  Descricao,
  Image,
  Infos,
  NoteImage,
  Titulo
} from './styles'

type Props = {
  title: string
  category: string
  note: number
  detach: boolean
  description: string
  imageFood: string
  id: number
}

const Product = ({
  title,
  category,
  detach,
  description,
  imageFood,
  note,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 240) {
      return descricao.slice(0, 235) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <Image src={imageFood} alt={title} />
      <Infos>
        {detach ? (
          <Tag>Destaque da semana</Tag>
        ) : (
          <div style={{ display: 'none' }}>Não será exibido</div>
        )}
        <Tag>{category}</Tag>
      </Infos>
      <Content>
        <Titulo>
          <h3>{title}</h3>
          <NoteImage>
            <p>{note}</p>
            <img src={imageStar} />
          </NoteImage>
        </Titulo>
        <Descricao>{getDescricao(description)}</Descricao>
        <Button
          type="link"
          to={`/product/${id}`}
          title="Clique aqui para visitar os restaurantes"
        >
          saiba mais
        </Button>
      </Content>
    </Card>
  )
}

export default Product
