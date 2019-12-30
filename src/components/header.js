import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const Header = styled.header`
    border: 1px red solid;
    width: 375px;
    height: 50px;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const Span = styled.span`
    margin-left: 20px;
  `;

  return (
    <Header>
      <Span>Periodicidad personalizada</Span>
    </Header>
  )
}

export default Header;