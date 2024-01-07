import Background from '../../models/Background'

import Menus from '../../models/Menus'

import Perfil from '../../components/Perfil'
import BannerContent from '../../components/BannerContent'
import HeaderMenu from '../../components/HeaderMenu'

import fundoTrattoria from '../../assets/images/trattoria/fundo-tratoria.jpg'
import pizza from '../../assets/images/trattoria/pizza.png'
import lasanha from '../../assets/images/trattoria/lasanha.jpg'
import spaghetti from '../../assets/images/trattoria/spaghetti.jpg'
import gelato from '../../assets/images/trattoria/gelato.jpg'
import tiramisu from '../../assets/images/trattoria/tiramisu.jpg'
import vinho from '../../assets/images/trattoria/vinho.jpg'

const bannerHioki: Background[] = [
  {
    id: 1,
    backgroundImg: fundoTrattoria,
    name: 'La Dolce Vita Trattoria',
    category: 'Italiana'
  }
]

const menuFood: Menus[] = [
  {
    id: 2,
    description:
      'Uma pizza é um prato italiano popular consistindo de uma base fina de massa redonda, coberta com molho de tomate e uma variedade de coberturas, como queijo, carnes e vegetais',
    title: 'Pizza',
    image: pizza,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    description:
      'Lasanha é um prato, composto por camadas alternadas de folhas de massa larga e plana, molho de tomate, carne moída e queijos, geralmente ricota, mozzarella e parmesão.',
    title: 'Lasanha',
    image: lasanha,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    description:
      'Spaghetti é um tipo de massa longa, fina e cilíndrica. Normalmente é feita de semolina ou farinha e água. É frequentemente servida com molho de tomate.',
    title: 'Spaghetti',
    image: spaghetti,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 5,
    description:
      'o gelato tem um teor de gordura mais baixo do que o sorvete tradicional, pois é feito com mais leite e menos creme.',
    title: 'Gelato',
    image: gelato,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    description:
      'O Tiramisu é uma sobremesa italiana, conhecida pela sua rica camada de sabor e textura. Ele é feito com camadas alternadas de biscoitos ladyfinger embebidos em café e cremosa.',
    title: 'Tiramisu',
    image: tiramisu,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 7,
    description:
      'O vinho é uma bebida alcoólica feita principalmente pela fermentação do suco de uvas. Existem muitos tipos de vinho, que variam de acordo com a uva usada.',
    title: 'Vinho',
    image: vinho,
    button: 'Adicionar ao carrinho'
  }
]

const Trattoria = () => (
  <>
    <HeaderMenu />
    <BannerContent backgrounds={bannerHioki} />
    <Perfil menu={menuFood} />
  </>
)

export default Trattoria
