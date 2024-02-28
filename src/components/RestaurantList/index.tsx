import { Restaurantes } from '../../pages/Home'
import Restaurante from '../Restaurant'
import { ListaContainer } from './styles'

export type Props = {
  restaurantes: Restaurantes[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  return (
    <ListaContainer>
      {restaurantes.map((restaurante) => (
        <li key={restaurante.id}>
          <Restaurante
            id={restaurante.id}
            destaque={restaurante.destacado}
            image={restaurante.capa}
            title={restaurante.titulo}
            types={restaurante.tipo}
            rating={restaurante.avaliacao}
            description={restaurante.descricao}
          />
        </li>
      ))}
    </ListaContainer>
  )
}

export default RestaurantList
