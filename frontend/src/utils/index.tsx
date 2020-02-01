// tslint:disable: object-literal-sort-keys
// tslint:disable: no-bitwise

// https://stackoverflow.com/questions/32968332/how-do-i-prevent-the-error-index-signature-of-object-type-implicitly-has-an-an

export interface Size {
  mobileS: number;
  mobileM: number;
  mobileL: number;
  tablet: number;
  laptop: number;
  laptopL: number;
  desktop: number;
  [cur: string]: any;
}

const size: Size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = Object.keys(size).reduce((acc: any, cur: string) => {
  acc[cur] = `(min-width: ${size[cur]}px)`;
  return acc;
}, {});

// https://css-tricks.com/snippets/javascript/lighten-darken-color/

export function LightenDarkenColor(col: string, amt: number): string {
  let usePound = false;

  if (col[0] === '#') {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  let g = (num & 0x0000ff) + amt;

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}
