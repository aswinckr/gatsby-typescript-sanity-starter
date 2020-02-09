// https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'utils' {
  export const device: string;
}

declare module '@sanity/block-content-to-react';

declare module 'react-reveal/Fade';
