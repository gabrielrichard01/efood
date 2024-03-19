import styled from 'styled-components'
import { breakpoints, colores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  ${ButtonContainer} {
    width: 100%;
  }
`
export const SideBar = styled.aside`
  background-color: ${colores.pink};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0px 8px;
  z-index: 1;

  @media (max-width: ${breakpoints.phone}) {
    max-width: 280px;
  }
`
export const CartItem = styled.li`
  background-color: ${colores.beige};
  color: ${colores.pink};
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h4 {
    font-weight: 900;
    padding-bottom: 16px;
  }

  button {
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    font-size: 16px;
    cursor: pointer;
    color: ${colores.pink};
  }
`

export const ValorTotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colores.beige};
  font-weight: bold;
  margin-top: 40px;
`

export const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 4px 0;
  border: none;
  font-weight: bold;
  background-color: ${colores.beige};
  color: ${colores.pink};
  cursor: pointer;
`
export const CartButtons = styled.div`
  padding-bottom: 24px;

  .display-button {
    display: none;

    @media (max-width: ${breakpoints.phone}) {
      display: block;
    }
  }
`
