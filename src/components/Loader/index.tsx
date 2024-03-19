import { FadeLoader } from 'react-spinners'
import { Container } from './styles'
import { colores } from '../../styles'

const Loader = () => (
  <Container>
    <FadeLoader color={colores.pink} />
  </Container>
)

export default Loader
