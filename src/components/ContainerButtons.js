import React from 'react';
import styled from 'styled-components';
import CancelButton from './CancelButton'
import ReadyButton from './ReadyButton'

const ContainerButtons = () => {
  const Div = styled.div`
    margin: auto;
    width: 375px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

  return (
    <Div>
      <CancelButton />
      <ReadyButton />
    </Div>
  )

}

export default ContainerButtons