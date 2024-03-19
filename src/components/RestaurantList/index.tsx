import Restaurant from '../Restaurant'
import { ListaContainer } from './styles'
import Loader from '../Loader'

export type Props = {
  restaurantes?: Restaurantes[]
  isLoading?: boolean
}

const RestaurantList = ({ restaurantes, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <ListaContainer>
      {restaurantes &&
        restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Restaurant
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
