import Background from '../../models/Background'

import Menus from '../../models/Menus'

import Perfil from '../../components/Perfil'
import BannerContent from '../../components/BannerContent'
import HeaderMenu from '../../components/HeaderMenu'

import fundoHioki from '../../assets/images/body/fundo-hioki.jpg'
import hioki from '../../assets/images/body/hioki-sushi.png'
import ramen from '../../assets/images/hioki-sushi/ramen.jpg'
import mochi from '../../assets/images/hioki-sushi/mochi.jpg'
import gyosa from '../../assets/images/hioki-sushi/gyosa.jpg'
import temaki from '../../assets/images/hioki-sushi/temaki.jpg'
import yakisoba from '../../assets/images/hioki-sushi/yakisoba.jpg'

const bannerHioki: Background[] = [
  {
    id: 1,
    backgroundImg: fundoHioki,
    name: 'Hioki Sushi',
    category: 'Japonesa'
  }
]

const menuFood: Menus[] = [
  {
    id: 2,
    description:
      'O sushi é um prato tradicional da culinária japonesa. Ele é composto principalmente de arroz temperado com vinagre de arroz, açúcar e sal, combinado com diferentes tipos de ingredientes como peixes crus, frutos do mar e vegetais.',
    title: 'Sushi',
    image: hioki,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    description:
      'O Ramen é um prato tradicional japonês consistindo de um caldo saboroso. O prato é enriquecido com diversos ingredientes como porções de carne (geralmente porco), ovos cozidos, algas nori, cebolinha e às vezes milho ou brotos de bambu.',
    title: 'Ramen',
    image: ramen,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    description:
      'O mochi pode ser saboreado de várias maneiras: recheado com doce de feijão azuki, coberto com kinako (farinha de soja torrada), mergulhado em molho de soja doce, ou simplesmente comido puro  É comumente consumido durante o Ano Novo japonês.',
    title: 'Mochi',
    image: mochi,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 5,
    description:
      'O Gyosa é um tipo de pastel asiático, originário da China e popular no Japão. É um pequeno bolinho recheado, geralmente com uma mistura de carne de porco moída e vegetais como repolho, cebolinha e alho',
    title: 'Gyosa',
    image: gyosa,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    description:
      'O temaki é um tipo de sushi em forma de cone, feito com uma folha de alga nori na parte externa, recheado com arroz de sushi e uma variedade de ingredientes como peixes, frutos do mar, vegetais e condimentos.',
    title: 'Temaki',
    image: temaki,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 7,
    description:
      'O yakisoba é um prato de origem japonesa que consiste em macarrão frito. É frequentemente temperado com molho de soja e especiarias, apresentando uma cor marrom e um sabor salgado e um pouco adocicado.',
    title: 'Yakisoba',
    image: yakisoba,
    button: 'Adicionar ao carrinho'
  }
]

const Hioki = () => (
  <>
    <HeaderMenu />
    <BannerContent backgrounds={bannerHioki} />
    <Perfil menu={menuFood} />
  </>
)

export default Hioki
