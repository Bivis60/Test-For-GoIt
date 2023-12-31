import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: Manrope, sans-serif;
  color: ${p => p.theme.colors.mainText};
  background-color: ${p => p.theme.colors.backGround};
  -webkit-font-smoothing: Manrope;
  -moz-osx-font-smoothing: Manrope;
}

/* code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
} */

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

a {
  text-decoration: none;
}

input {
  border: none;
  background:  ${p => p.theme.colors.inputBackGround};
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}`;
