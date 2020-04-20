import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Button, Spinner } from './styles';

export default function AsyncButton({
  iconSize = 16,
  iconColor = '#fff',
  amount = 0,
  onClick,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const toggleSpinner = () => setIsLoading(!isLoading);

  const handleClick = async () => {
    toggleSpinner();
    try {
      await onClick();
    } finally {
      toggleSpinner();
    }
  };

  const Content = () => (
    <>
      <div className="content">
        <MdShoppingCart size={iconSize} color={iconColor} />
        {''}
        {amount}
      </div>
      <span>Adicionar ao carrinho</span>
    </>
  );

  return (
    <Button type="submit" onClick={handleClick} disabled={isLoading}>
      {isLoading ? <Spinner /> : <Content />}
    </Button>
  );
}
