import styled from 'styled-components'
import { cores } from '../../styles'

export const CardMenu = styled.div`
  background-color: ${cores.rosa};
  padding: 8px;
  margin-bottom: 32px;
`

export const ImageCard = styled.img`
  width: 304px;
  height: 167px;
`

export const Titulo = styled.h4`
  color: ${cores.branco};
  font-size: 16px;
  padding: 8px 0;
`

export const Descricao = styled.p`
  color: ${cores.branco};
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 8px;
`

export const ButtonWhite = styled.a`
  background-color: ${cores.branco};
  color: ${cores.rosa};
  padding: 4px 0;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  width: 100%;
  display: block;
`
