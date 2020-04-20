import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  text-align: center;
  overflow: auto;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #e60efe;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 8px 16px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      @media only screen and (min-width: 640px) {
        padding: 12px 20px;
      }

      &:hover {
        background: ${darken(0.1, '#e60efe')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  text-align: left;
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 14px;
    margin-left: 5px;

    @media only screen and (min-width: 640px) {
      font-size: 28px;
    }
  }
`;
