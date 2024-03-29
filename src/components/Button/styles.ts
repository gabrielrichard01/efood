import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) =>
    props.variant === 'primary' ? colores.pink : colores.beige};
  background-color: ${(props) =>
    props.variant === 'primary' ? colores.beige : colores.pink};
  border: none;
  padding: 4px 6px;
  margin-top: 7px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  display: block;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${colores.pink};
  color: ${colores.beige};
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-top: 16px;
  cursor: pointer;
`
