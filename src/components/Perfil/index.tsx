import Menus from '../../models/Menus'
import ProductMenu from '../ProductMenu'
import { ListMenu } from './styles'

type Props = {
  menu: Menus[]
}

const Perfil = ({ menu }: Props) => (
  <div className="container">
    <ListMenu>
      {menu.map((menus) => (
        <ProductMenu
          key={menus.id}
          title={menus.title}
          description={menus.description}
          image={menus.image}
          button={menus.button}
        />
      ))}
    </ListMenu>
  </div>
)

export default Perfil
