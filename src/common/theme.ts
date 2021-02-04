import { ThemedStyledProps } from 'styled-components';

type Colors = {
  green: string;
  white: string;
  cyan: string;
  yellow: string;
  grey: string;
  lightgrey: string;
  red: string;
  lightred: string;
};

type FontSize = {
  normal: string;
  subTitle: string;
  title: string;
};

type Theme = {
  colors: Colors;
  fontsize: FontSize;
};

const theme: Theme = {
  colors: {
    green: '#2f7510',
    white: '#ffffff',
    cyan: '#3986ac',
    yellow: '#ffd055',
    grey: '#444',
    lightgrey: '#dbdbdb',
    red: '#f72018',
    lightred: '#f7b5b2',
  },
  fontsize: {
    normal: '14px',
    subTitle: '20px',
    title: '30px',
  },
};

export type CampsThemedProps<P = Record<string, unknown>> = ThemedStyledProps<P, Theme>;
export { theme };
