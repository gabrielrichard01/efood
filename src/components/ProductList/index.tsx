import Product from '../Product'

import { Food } from '../../pages/Home'

import { List } from './styles'

export type Props = {
  foods: Food[]
}

const ProductList = ({ foods }: Props) => {
  return (
    <div>
      <div className="container">
        <List>
          {foods.map((food) => (
            <li key={food.id}>
              <Product
                id={food.id}
                description={food.descricao}
                imageFood={food.capa}
                category={food.tipo}
                detach={food.destacado}
                title={food.titulo}
                note={food.avaliacao}
              />
            </li>
          ))}
        </List>
      </div>
    </div>
  )
}

export default ProductList
