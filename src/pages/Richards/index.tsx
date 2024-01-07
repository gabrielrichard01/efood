import Background from '../../models/Background'

import Menus from '../../models/Menus'

import Perfil from '../../components/Perfil'
import BannerContent from '../../components/BannerContent'
import HeaderMenu from '../../components/HeaderMenu'

import fundo from '../../assets/images/churrascaria/fundo-churrasco.jpg'
import picanha from '../../assets/images/churrascaria/picanha.jpg'
import frango from '../../assets/images/churrascaria/frango.jpg'
import feijao from '../../assets/images/churrascaria/feijao.jpg'
import pudim from '../../assets/images/churrascaria/pudim.jpg'
import caipirinha from '../../assets/images/churrascaria/caipirinha.jpg'
import cerveja from '../../assets/images/churrascaria/cerveja.jpg'

const bannerHioki: Background[] = [
  {
    id: 1,
    backgroundImg: fundo,
    name: 'Richards Churrascaria',
    category: 'Churrasco'
  }
]

const menuFood: Menus[] = [
  {
    id: 2,
    description:
      'A picanha geralmente é preparada assada na churrasqueira, onde é cortada em tiras grossas ou em pedaços maiores, mantendo a gordura para adicionar sabor.',
    title: 'Picanha',
    image: picanha,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    description:
      'Um frango é tipicamente um prato feito com pedaços de frango que foram empanados ou revestidos em uma mistura de farinha e temperos.',
    title: 'Frango',
    image: frango,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    description:
      'O Feijão Tropeiro é um prato tradicional da culinária brasileira, originário do estado de Minas Gerais. É feito com feijão cozido e misturado com pedaços de carne de porco.',
    title: 'Feijão Tropeiro',
    image: feijao,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 5,
    description:
      'Um pudim é uma sobremesa doce, geralmente de consistência cremosa e suave. É frequente feito com leite, açúcar, ovos e saborizantes como baunilha ou caramelo.',
    title: 'Pudim',
    image: pudim,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    description:
      'A caipirinha é uma bebida brasileira famosa, feita principalmente de cachaça (um destilado de cana-de-açúcar), limão, açúcar e gelo.',
    title: 'Caipirinha',
    image: caipirinha,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 7,
    description:
      'Uma cerveja pode ser descrita como uma bebida alcoólica fermentada, geralmente de cor dourada a âmbar, com sabores que variam de suave a amargo.',
    title: 'Cerveja',
    image: cerveja,
    button: 'Adicionar ao carrinho'
  }
]

const Richards = () => (
  <>
    <HeaderMenu />
    <BannerContent backgrounds={bannerHioki} />
    <Perfil menu={menuFood} />
  </>
)

export default Richards
