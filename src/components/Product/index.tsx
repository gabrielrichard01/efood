import Button from '../Button'
import Tag from '../Tag'
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
  infos: string[]
  note: string
  button: string
  description: string
  imageFood: string
  imageStar: string
  pages: string
}

const Product = ({
  title,
  infos,
  note,
  button,
  description,
  imageFood,
  imageStar,
  pages
}: Props) => (
  <Card>
    <Image src={imageFood} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Content>
      <Titulo>
        <h3>{title}</h3>
        <NoteImage>
          <p>{note}</p>
          <img src={imageStar} />
        </NoteImage>
      </Titulo>
      <Descricao>{description}</Descricao>
      <Button
        type="link"
        to={`${pages}`}
        title="Clique aqui para visitar os restaurantes"
      >
        {button}
      </Button>
    </Content>
  </Card>
)

export default Product
