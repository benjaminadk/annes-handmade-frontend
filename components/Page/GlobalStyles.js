import { createGlobalStyle } from 'styled-components'
import { darken } from 'polished'
import theme from './theme'

export default createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url('/static/Raleway-SemiBold.ttf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Charmonman';
    src: url('/static/Charmonman-Bold.ttf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Raleway';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {
    background: ${darken(0.1, theme.secondary)};
    position: fixed;
    z-index: 10;
    top: 75px;
    left: 0;
    width: 100%;
    height: 4px;
  }
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  } 
`
