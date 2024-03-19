import styled from 'styled-components'
import { breakpoints, colores } from '../../styles'
import { Link } from 'react-router-dom'

export const Footer = styled.div`
  background-color: ${colores.beige};
  margin-top: 120px;
  display: flex;
  justify-content: center;
  padding: 40px;

  @media (max-width: ${breakpoints.phone}) {
    margin-top: 80px;
  }
`

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`

export const Descricao = styled.p`
  max-width: 480px;
  text-align: center;
  font-size: 10px;
  color: ${colores.pink};
  margin-top: 80px;
`
