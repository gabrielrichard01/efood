import Tag from '../Tag'
import { Card, Title, Types, Descricao, Infos, Note } from './styles'
import star from '../../assets/images/estrela.png'
import Button from '../Button'

type Props = {
  image: string
  types: string
  title: string
  rating: number
  description: string
  id: number
  destaque?: boolean
}

const Restaurant = ({
  image,
  types,
  title,
  rating,
  description,
  id,
  destaque
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <img src={image} alt="" />
        <Types>
          {destaque ? (
            <>
              <Tag>Destaque da semana</Tag>
            </>
          ) : null}
          <Tag>{types}</Tag>
        </Types>
        <Infos>
          <Title>
            <h3>{title}</h3>
            <Note>
              <p>{rating}</p>
              <img src={star} alt="" />
            </Note>
          </Title>
          <Descricao>{getDescricao(description)}</Descricao>
          <Button
            type="link"
            title="clique aqui para saber mais"
            variant="secondary"
            to={`/restaurante/${id}`}
          >
            Saiba mais
          </Button>
        </Infos>
      </Card>
    </>
  )
}

export default Restaurant
