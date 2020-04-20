import styled from 'styled-components';
import { darken } from 'polished';
import { Spinner as GlobalSpinner } from '../Loader/styles';

export const Button = styled.button`
  background: #e60efe;
  color: #fff;
  border: 0;
  border-radius: hidden;
  margin-top: auto;
  display: flex;
  align-items: center;
  transition: background 200ms;
  max-height: 3.075em;

  &:hover {
    background: ${darken(0.12, '#e60efe')};
  }

  &:disabled {
    opacity: 0.85;
    cursor: not-allowed;
  }

  div {
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);

    svg {
      margin-right: 5px;
    }
  }
  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const Spinner = styled(GlobalSpinner)`
  &,
  &::after {
    height: auto;
    width: auto;
    margin: 0 auto;
  }
`;
