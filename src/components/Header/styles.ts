import styled from 'styled-components'
import background from '../../assets/images/fundo.png'
import { breakpoints, colores } from '../../styles'
import { Link } from 'react-router-dom'

export const BannerImg = styled.header`
  background-image: url(${background});
  display: block;
  padding: 40px;
`

export const HeaderContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
`

export const LogoEfood = styled(Link)`
  display: flex;
  justify-content: center;
`

export const Titulo = styled.h1`
  text-align: center;
  margin-top: 140px;
  font-weight: 900;
  font-size: 36px;
  color: ${colores.pink};

  @media (max-width: ${breakpoints.phone}) {
    font-size: 25px;
    margin-top: 80px;
  }
`
