import Background from '../../models/Background'

import Menus from '../../models/Menus'

import Perfil from '../../components/Perfil'
import BannerContent from '../../components/BannerContent'
import HeaderMenu from '../../components/HeaderMenu'

import fundo from '../../assets/images/el-mexican/fundo-mexicana.jpg'
import nachos from '../../assets/images/el-mexican/nachos.jpg'
import tacos from '../../assets/images/el-mexican/tacos.jpg'
import quesadillas from '../../assets/images/el-mexican/quesadillas.jpg'
import chiles from '../../assets/images/el-mexican/chiles-rellenos.jpg'
import flan from '../../assets/images/el-mexican/flan.jpg'
import churros from '../../assets/images/el-mexican/churros.jpg'

const bannerHioki: Background[] = [
  {
    id: 1,
    backgroundImg: fundo,
    name: 'El Mexican',
    category: 'Mexicano'
  }
]

const menuFood: Menus[] = [
  {
    id: 2,
    description:
      'Nachos são um prato popular de origem mexicana que consiste em tortilhas de milho, geralmente na forma de pequenos triângulos e cobertos com queijo derretido.',
    title: 'Nacho',
    image: nachos,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    description:
      'Tacos são um prato tradicional da culinária mexicana, consistindo em uma tortilha geralmente de milho, que é dobrada ou enrolada em torno de um recheio.',
    title: 'Taco',
    image: tacos,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    description:
      'As quesadillas são um prato tradicional mexicano que consiste em tortilhas, geralmente feitas de milho ou farinha de trigo e recheadas com queijo',
    title: 'Quesadilla',
    image: quesadillas,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 5,
    description:
      'Os Chiles Rellenos são um prato tradicional da culinária mexicana, que consiste em pimentas (geralmente pimentas poblano) recheadas com uma variedade de ingredientes.',
    title: 'Chiles Rellenos',
    image: chiles,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    description:
      'O flan é feito basicamente de ovos, leite e açúcar, com a adição de baunilha para realçar o sabor. É cozido em banho-maria até atingir uma consistência firme, mas delicada.',
    title: 'Flan',
    image: flan,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 7,
    description:
      'Churros são um tipo de doce frito popular na culinária espanhola e latino-americana. Consistem em uma massa à base de farinha e água, que é frita até ficar crocante e dourada.',
    title: 'Churros',
    image: churros,
    button: 'Adicionar ao carrinho'
  }
]

const ElMexican = () => (
  <>
    <HeaderMenu />
    <BannerContent backgrounds={bannerHioki} />
    <Perfil menu={menuFood} />
  </>
)

export default ElMexican
