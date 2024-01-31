import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Items = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
`

export const Item = styled.li`
  list-style: none;
  background-color: ${cores.rosa};
  padding: 8px;
  width: 320px;
  border-radius: 8px;

  ${ButtonContainer} {
    width: 100%;
  }

  img {
    width: 304px;
    height: 167px;
    border-radius: 8px;
  }
`

export const Titulo = styled.h3`
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  padding: 8px 8px 28px 32px;
  position: relative;
  z-index: 1;
  background-color: ${cores.rosa};
  display: flex;
  justify-content: space-between;

  ${ButtonContainer} {
    margin-top: 16px;
  }

  .imagemodal {
    display: flex;
    padding-top: 24px;
    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
      padding-right: 24px;
    }

    h4 {
      color: ${cores.branco};
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    p,
    span {
      color: ${cores.branco};
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-bottom: 22px;
    }
  }

  .close {
    img {
      cursor: pointer;
    }
  }
`
