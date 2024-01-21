import styled from 'styled-components'
import { cores } from '../../styles'

export const CardMenu = styled.div`
  background-color: ${cores.rosa};
  padding: 8px;
  width: 320px;
`

export const ImageCard = styled.img`
  width: 304px;
  height: 167px;
`

export const Titulo = styled.h4`
  color: ${cores.bege};
  font-size: 16px;
  padding: 6px 0;
`

export const Descricao = styled.p`
  color: ${cores.bege};
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 8px;
  width: 100%;
  height: 88px;
  overflow: hidden;
`
