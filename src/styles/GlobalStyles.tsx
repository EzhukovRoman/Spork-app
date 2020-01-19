
import { createGlobalStyle } from 'styled-components'

// @TODO: fix globalStyle theme typings
const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${p => p.theme.colors.bg};
    color: ${p => p.theme.colors.primary};
    margin: 0;
    height: 100vh;
    overflow: hidden;
  }
  #root {
    height: 100%;
  }
`

export default GlobalStyles
