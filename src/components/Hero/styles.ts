import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  padding-top: 25px;
  padding-bottom: 32px;
  width: 100%;
  height: 280px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Category = styled.h3`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
`

export const Restaurant = styled.h4`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
`
