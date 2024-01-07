import Background from '../../models/Background'

import Menus from '../../models/Menus'

import Perfil from '../../components/Perfil'
import BannerContent from '../../components/BannerContent'
import HeaderMenu from '../../components/HeaderMenu'

import fundo from '../../assets/images/china/fundo-chinesa.jpg'
import kungPao from '../../assets/images/china/kung-pao.jpg'
import rolinho from '../../assets/images/china/rolinho.jpg'
import patoPequim from '../../assets/images/china/pato-pequim.jpg'
import chowMein from '../../assets/images/china/chow-mein.jpg'
import sopaWonton from '../../assets/images/china/sopa-wonton.jpg'
import tortaOvo from '../../assets/images/china/torta-ovo.jpg'

const bannerHioki: Background[] = [
  {
    id: 1,
    backgroundImg: fundo,
    name: 'Food China',
    category: 'Chinesa'
  }
]

const menuFood: Menus[] = [
  {
    id: 2,
    description:
      'O Kung Pao é um prato clássico da culinária chinesa, conhecido mundialmente. Originário da província de Sichuan, é famoso por seu sabor picante e profundamente aromático.',
    title: 'Kung Pao',
    image: kungPao,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    description:
      'O rolinho primavera é um prato tradicional na culinária asiática, especialmente popular na China e no Sudeste Asiático. Trata-se de um pequeno rolo recheado.',
    title: 'Rolinho Primavera',
    image: rolinho,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    description:
      'O pato é primeiramente inflado para separar a pele da carne, depois é mergulhado em água fervente e, finalmente, assado em forno a lenha, resultando em uma pele dourada e crocante.',
    title: 'Pato de Pequim',
    image: patoPequim,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 5,
    description:
      'O Chow Mein é um prato popular da culinária chinesa que consiste em macarrão frito, muitas vezes acompanhado de legumes e uma fonte de proteína como carne, frango ou camarão.',
    title: 'Chow Mein',
    image: chowMein,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    description:
      'A sopa wonton é um prato clássico da culinária chinesa, conhecida por sua simplicidade e sabor rico. Ela consiste em wontons, que são pequenos pastéis recheados. ',
    title: 'Sopa Wonton',
    image: sopaWonton,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 7,
    description:
      'A torta de ovo é um prato tradicional em muitas culturas, consistindo de uma massa crocante e um recheio saboroso feito principalmente de ovos.',
    title: 'Torta de ovo',
    image: tortaOvo,
    button: 'Adicionar ao carrinho'
  }
]

const China = () => (
  <>
    <HeaderMenu />
    <BannerContent backgrounds={bannerHioki} />
    <Perfil menu={menuFood} />
  </>
)

export default China
