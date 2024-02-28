import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListaContainer = styled.ul`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
