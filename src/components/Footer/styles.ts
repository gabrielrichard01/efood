import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.bege};
  margin-top: 72px;
  padding: 40px 0;
`

export const FooterLogo = styled.div`
  text-align: center;
  margin-bottom: 32px;
`

export const RedesSociais = styled.div`
  text-align: center;
  margin-bottom: 80px;

  img {
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  color: ${cores.rosa};
  text-align: center;
  font-size: 10px;
  max-width: 480px;
  margin: 0 auto;
`
