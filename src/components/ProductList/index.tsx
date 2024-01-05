import Food from '../../models/food'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  foods: Food[]
}

const ProductList = ({ foods }: Props) => (
  <div>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            description={food.description}
            imageFood={food.imageFood}
            imageStar={food.imageStar}
            infos={food.infos}
            title={food.title}
            note={food.note}
            button={food.button}
            pages={food.pages}
          />
        ))}
      </List>
    </div>
  </div>
)

export default ProductList
