import Food from '../../models/food'

import ProductList from '../../components/ProductList'
import Header from '../../components/Header'

import star from '../../assets/images/body/estrela.png'
import hioki from '../../assets/images/body/hioki-sushi.png'
import dolce from '../../assets/images/body/la-dolce.png'
import churrasco from '../../assets/images/body/churrasco.jpg'
import chinesa from '../../assets/images/body/chinesa.jpg'
import arabe from '../../assets/images/body/arabe.jpg'
import mexicana from '../../assets/images/body/mexicana.jpg'

const restaurants: Food[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    imageFood: hioki,
    imageStar: star,
    note: '4.9',
    button: 'saiba mais',
    pages: 'Hioki'
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    imageFood: dolce,
    imageStar: star,
    note: '4.6',
    button: 'saiba mais',
    pages: 'Trattoria'
  },
  {
    id: 3,
    description:
      'A Churrascaria Richards é um restaurante de churrasco tradicional, conhecido por seu ambiente acolhedor e rústico. O restaurante também possui um bar bem abastecido, oferecendo uma seleção de vinhos e cervejas para complementar a refeição.',
    title: 'Richards Churrascaria',
    infos: ['Churrasco'],
    imageFood: churrasco,
    imageStar: star,
    note: '4.8',
    button: 'saiba mais',
    pages: 'Richards'
  },
  {
    id: 4,
    description:
      'A culinária do Arabic Restaurant é uma exuberante celebração dos sabores do Oriente Médio. Este restaurante se destaca por suas autênticas receitas árabes, que incluem pratos tradicionais como hummus cremoso, tabule fresco e perfumado, e o rico e saboroso kebab.',
    title: 'Arabic restaurant',
    infos: ['Árabe'],
    imageFood: arabe,
    imageStar: star,
    note: '4.3',
    button: 'saiba mais',
    pages: 'Arabic'
  },
  {
    id: 5,
    description:
      'A culinária do restaurante El Mexican é uma autêntica celebração dos sabores mexicanos. O menu apresenta clássicos como tacos crocantes, enchiladas suculentas e burritos recheados. As pimentas, um ingrediente chave, são usadas com maestria.',
    title: 'El Mexican',
    infos: ['Mexicano'],
    imageFood: mexicana,
    imageStar: star,
    note: '4.6',
    button: 'saiba mais',
    pages: 'ElMexican'
  },
  {
    id: 6,
    description:
      'A culinária do restaurante Food China é uma verdadeira jornada pelos sabores autênticos da China. Seus pratos são caracterizados por uma harmoniosa mistura de especiarias. O restaurante é famoso por seu Pato de Pequim crocante e Dim Sums variados.',
    title: 'Food China',
    infos: ['Chinesa'],
    imageFood: chinesa,
    imageStar: star,
    note: '4.8',
    button: 'saiba mais',
    pages: 'china'
  }
]

const Home = () => (
  <>
    <Header />
    <ProductList foods={restaurants} />
  </>
)

export default Home
