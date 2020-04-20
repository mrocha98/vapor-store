import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);
  return (
    <Container>
      <Link to="/" replace>
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart" replace>
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
