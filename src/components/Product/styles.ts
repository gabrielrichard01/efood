import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  border: 1px solid ${cores.rosa};
  position: relative;
  margin-bottom: 48px;

  ${TagContainer} {
    margin-right: 12px;
  }
`

export const Image = styled.img`
  width: 472px;
  height: 217px;
`

export const ButtonPink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
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
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`