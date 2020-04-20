import React from 'react';
import { createPortal } from 'react-dom';
import { SpinnerContainer, Spinner } from './styles';

export default function Loader({ show }) {
  return createPortal(
    <SpinnerContainer show={show}>
      <Spinner />
    </SpinnerContainer>,
    document.body
  );
}
