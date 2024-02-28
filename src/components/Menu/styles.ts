import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CardCardapio = styled.div`
  background-color: ${cores.pink};
  padding: 8px;
  color: ${cores.beige};
  border-radius: 8px;
  width: 320px;
  height: 338px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 167px;
    border-radius: 10px;
  }

  h3 {
    margin-bottom: 8px;
    font-size: 16px;
  }

  p {
    line-height: 22px;
    font-size: 14px;
    height: 88px;
    overflow: hidden;
  }

  ${ButtonContainer} {
    width: 100%;
  }
`
