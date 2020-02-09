// tslint:disable: object-literal-sort-keys
import Typography from 'typography';
import { linkColor } from '../components/colors';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.7,
  bodyFontFamily: ['Inter', 'Helvetica', 'sans-serif'],
  headerFontFamily: ['Inter', 'Helvetica', 'sans-serif'],
  // googleFonts: [{ name: 'Barlow', styles: ['400', '700'] }],
  headerWeight: 600,
  bodyWeight: 400,
  scaleRatio: 3.25,
  overrideStyles: () => ({
    h1: {
      fontSize: '3em',
      letterSpacing: '-.04em',
    },
    h2: {
      letterSpacing: '-.01em',
      fontWeight: 600,
    },
    a: {
      fontWeight: 600,
    },
    li: {
      listStyle: 'circle',
    },
  }),
});

export default typography;
