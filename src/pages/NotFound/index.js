import React from 'react';
import { Image } from './styles';
import _404 from '../../assets/images/404.jpg';

export default function NotFound() {
  return (
    <div>
      <Image src={_404} alt="Erro 404" />
    </div>
  );
}
