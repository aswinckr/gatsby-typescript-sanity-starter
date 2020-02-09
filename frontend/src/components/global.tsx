import { createGlobalStyle } from 'styled-components';
import { themeBackgroundColor, textColor, linkColor } from './colors';

export const GlobalStyles = createGlobalStyle`
/* @import url("https://use.typekit.net/wcz3nbr.css"); */
/* @import url("https://cdn.jsdelivr.net/npm/inter-ui@3.11.0/inter.min.css"); */
body {
  background: ${themeBackgroundColor};
  color: ${textColor};
}

a {
  color: ${linkColor};
  text-decoration: none;
}

`;
