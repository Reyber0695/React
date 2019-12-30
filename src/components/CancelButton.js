import React from 'react';
import styled from 'styled-components';

const CancelButton = () => {
  
  const Button = styled.button`
    padding: 10px 10px;
    background: transparent;
    border: 0;
    color: gray;
    font-size: 16px;
  `;
  return (
    <Button>
      Cancelar
    </Button>
  )
}

export default CancelButton;