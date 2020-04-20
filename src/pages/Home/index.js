import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductList } from './styles';
import Loader from '../../components/Loader';
import AsyncButton from '../../components/AsyncButton';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, [])
  );

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const res = await api.get('/products');
      const data = res.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
      setIsLoading((old) => !old);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      <Loader show={isLoading} />
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <AsyncButton
            onClick={() => handleAddProduct(product.id)}
            amount={amount[product.id]}
          />
        </li>
      ))}
    </ProductList>
  );
}
