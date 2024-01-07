import Background from '../../models/Background'

import Menus from '../../models/Menus'

import Perfil from '../../components/Perfil'
import BannerContent from '../../components/BannerContent'
import HeaderMenu from '../../components/HeaderMenu'

import fundo from '../../assets/images/arabic/fundo-arabe.jpg'
import baklava from '../../assets/images/arabic/baklava.jpg'
import halva from '../../assets/images/arabic/halva.jpg'
import falafel from '../../assets/images/arabic/falafel.jpg'
import mansaf from '../../assets/images/arabic/mansaf.jpg'
import kebab from '../../assets/images/arabic/kebab.jpg'
import ayran from '../../assets/images/arabic/ayran.jpg'

const bannerHioki: Background[] = [
  {
    id: 1,
    backgroundImg: fundo,
    name: 'Arabic Restaurant',
    category: 'Árabe'
  }
]

const menuFood: Menus[] = [
  {
    id: 2,
    description:
      'Consiste em camadas de massa folhada fina, recheadas com uma mistura de nozes trituradas, frequentemente pistaches, nozes ou amêndoas.',
    title: 'Baklava',
    image: baklava,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    description:
      'O halva é um doce encontrado no o Oriente Médio, Ásia Central e o Mediterrâneo. Ele tem uma textura densa e granulada, e é feito a partir de ingredientes como farinha de sementes.',
    title: 'halva',
    image: halva,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    description:
      'O falafel é um prato popular do Oriente Médio, feito principalmente de grão-de-bico ou fava moídos. Os grãos são embebidos em água.',
    title: 'Falafel',
    image: falafel,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 5,
    description:
      'O Mansaf é um prato tradicional jordaniano, frequentemente considerado o prato nacional da Jordânia. Ele é feito com carne de cordeiro cozida em um molho de iogurte fermentado.',
    title: 'Mansaf',
    image: mansaf,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    description:
      'O kebab é um prato popular originário do Oriente Médio, consistindo principalmente de carne cortada em pedaços ou moída, que é grelhada ou assada.',
    title: 'Kebab',
    image: kebab,
    button: 'Adicionar ao carrinho'
  },
  {
    id: 7,
    description:
      'Ayran é uma bebida tradicional em muitos países do Oriente Médio e do Mediterrâneo. É feito a partir de iogurte misturado com água e um pouco de sal, resultando em uma bebida.',
    title: 'Ayran',
    image: ayran,
    button: 'Adicionar ao carrinho'
  }
]

const Arabic = () => (
  <>
    <HeaderMenu />
    <BannerContent backgrounds={bannerHioki} />
    <Perfil menu={menuFood} />
  </>
)

export default Arabic
