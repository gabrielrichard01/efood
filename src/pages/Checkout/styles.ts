import styled from 'styled-components'
import { CartContainer, SideBar } from '../../components/Cart/styles'
import { colores } from '../../styles'

export const OrderContainer = styled(CartContainer)`
  display: none;

  .is-open {
    display: flex;
  }
`

export const FormBar = styled(SideBar)`
  p {
    color: ${colores.beige};
    font-weight: bold;
    margin-bottom: 16px;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin: 8px 0;
    color: ${colores.beige};
    font-weight: bold;
    font-size: 14px;
  }
  input {
    height: 32px;
    background-color: ${colores.beige};
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding-left: 8px;
    &:focus {
      outline: none;
    }
    &.error {
      border: 3px solid gold;
    }
  }
`
export const InputNumbers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  column-gap: 34px;
  div {
    margin-top: 8px;
  }

  label {
    color: ${colores.beige};
    font-weight: bold;
    font-size: 14px;
  }

  input {
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
    padding-left: 8px;
    height: 32px;
    width: 100%;
    background-color: ${colores.beige};
    border: none;
    &:focus {
      outline: none;
    }
    &.error {
      border: 3px solid gold;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  button {
    margin-bottom: 8px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    background-color: ${colores.beige};
    color: ${colores.pink};
    cursor: pointer;
  }
`

export const OrderConfirm = styled(CartContainer)`
  display: flex;
`

export const MessageContainer = styled(CartContainer)`
  display: flex;
`

export const SuccessMessage = styled(FormBar)`
  h4 {
    font-size: 16px;
    font-weight: bold;
    color: ${colores.beige};
  }
  p {
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    padding-top: 16px;
  }
`

export const ButtonPayment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  p {
    width: 100%;
    margin-bottom: 8px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    background-color: ${colores.beige};
    color: ${colores.pink};
    cursor: pointer;
    text-align: center;
    padding: 4px 0;
  }
`
