import styled from 'styled-components';
import { load } from '../../styles/keyframes';

export const SpinnerContainer = styled.div`
  align-items: center;
  background-color: #333;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  height: 100%;
  justify-content: center;
  left: 50%;
  opacity: 0.4;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

/*
  forked from https://projects.lukehaas.me/css-loaders/
*/

export const Spinner = styled.div`
  animation: ${load} 1.1s infinite linear;
  border-top: 1.1em solid rgba(255, 255, 255, 0.3);
  border-right: 1.1em solid rgba(255, 255, 255, 0.3);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.3);
  border-left: 1.1em solid #ffffff;
  font-size: 10px;
  margin: 60px auto;
  text-indent: -9999em;

  &,
  &::after {
    border-radius: 50%;
    height: 10em;
    width: 10em;
  }
`;
