import styled from 'styled-components';

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;

  @media only screen and (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    >span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
`;
