import { createGlobalStyle } from 'styled-components'

export const cores = {
  pink: '#E66767',
  beige: '#FFEBD9',
  white: '#FFFFFF'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  phone: '400px'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: #FFF8F2;
  }

  .container{
    max-width:1024px;
    width:100%;
    margin:0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 90%;
    }
  }

`

export default GlobalCss
