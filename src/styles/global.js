import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #433874 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      height: 0.35rem;
      width: 0.35rem;
    }

    &::-webkit-scrollbar-track {
      background: #eff1f3;
    }

    &::-webkit-scrollbar-thumb {
      background: #e60efe;
    }
  }

  body, input, button {
    font: 14px Oxygen Mono, monospace;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
