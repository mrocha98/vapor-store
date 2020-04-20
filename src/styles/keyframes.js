import { keyframes } from 'styled-components';

/*
  forked from https://projects.lukehaas.me/css-loaders/
*/

export const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
