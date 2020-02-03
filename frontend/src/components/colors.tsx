import theme from 'styled-theming';
import { LightenDarkenColor } from '../utils';

// Basic Colors

export const primaryColor: string = '#FF6767';
export const primaryHoverColor: string = LightenDarkenColor(primaryColor, -30);
export const darkBackgroundColor: string = '#1c1d25';
export const lightBackgroundColor: string = '#FFF';
export const linkColor: string = primaryColor;
export const headerLinkColor: string = '#FFF';

// Toggle Colors

export const textColor = theme('mode', {
  dark: 'rgba(255,255,255,0.87)',
  light: '#24292e',
});

export const backgroundColor = theme('mode', {
  dark: darkBackgroundColor,
  light: lightBackgroundColor,
});

export const themeBackgroundColor = theme('mode', {
  dark: '#1c1d25',
  light: '#F5f5f5',
});

export const headerBackgroundColor = theme('mode', {
  dark: '#111217',
  light: '#111217',
});

export const interfaceIconsColor = theme('mode', {
  dark: '#FFFFFF',
  light: '#262A2B',
});
