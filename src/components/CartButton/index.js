import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Button } from './styles';

export default function CartButton({
  iconSize = 16,
  iconColor = '#fff',
  amount = 0,
  ...rest
}) {
  return (
    <Button type="submit" {...rest}>
      <div className="content">
        <MdShoppingCart size={iconSize} color={iconColor} />
        {''}
        {amount}
      </div>
      <span>Adicionar ao carrinho</span>
    </Button>
  );
}
