// tslint:disable: object-literal-sort-keys
import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  bodyFontFamily: ['Barlow', 'Helvetica', 'sans-serif'],
  headerFontFamily: ['Barlow', 'Helvetica', 'sans-serif'],
  googleFonts: [{ name: 'Barlow', styles: ['400', '700'] }],
  headerWeight: 700,
  bodyWeight: 400,
  scaleRatio: 2.35,
});

export default typography;
