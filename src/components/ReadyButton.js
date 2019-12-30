import React from 'react';
import styled from 'styled-components';

const ReadyButton = () => {
  
  const Button = styled.button`
    padding: 10px 10px;
    background: transparent;
    border: 0;
    color: #1a73e8;
    font-size: 16px;
    margin-right: 20px;
  `;
  return (
    <Button>
      Listo
    </Button>
  )
}

export default ReadyButton;