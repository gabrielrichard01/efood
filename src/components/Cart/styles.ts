import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 30px 10px 0 10px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    margin-top: 20px;
  }
`

export const Prices = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.bege};
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  padding: 10px;
  width: 344px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    padding-right: 10px;
    padding-bottom: 4px;
  }

  h3 {
    color: ${cores.rosa};
    padding-bottom: 25px;
    font-size: 14px;
  }

  span {
    color: ${cores.rosa};
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    border: none;
  }
`
