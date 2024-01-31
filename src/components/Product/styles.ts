import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Card = styled.div`
  border: 1px solid ${cores.rosa};
  position: relative;
  width: 472px;

  ${TagContainer} {
    margin-right: 12px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const ButtonPink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.bege};
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-top: 16px;
  margin-bottom: 12px;
`

export const Content = styled.div`
  padding: 8px;
`

export const Titulo = styled.div`
  color: ${cores.rosa};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding-bottom: 16px;

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 18px;
  }
`

export const NoteImage = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  color: ${cores.rosa};
  padding-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
  width: 100%;
  height: 88px;
  overflow: hidden;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 0;
`
