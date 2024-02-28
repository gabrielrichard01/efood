import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagRestaurante } from '../Tag/styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.white};
  position: relative;
  width: 472px;
  border: 1px solid ${cores.pink};

  > img {
    object-fit: cover;
    width: 100%;
    height: 217px;
  }

  ${TagRestaurante} {
    margin-left: 8px;
  }

  ${ButtonLink} {
    margin-bottom: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.phone}) {
    width: 300px;
  }
`

export const Infos = styled.div`
  padding: 0 8px;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.pink};
  font-weight: bold;

  h3 {
    font-size: 18px;
  }
`

export const Note = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
  }
`

export const Types = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
`

export const Descricao = styled.p`
  color: ${cores.pink};
  line-height: 22px;
  margin-top: 12px;
  font-size: 14px;
  height: 86px;
  overflow: hidden;
`
