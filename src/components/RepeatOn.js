import React, { useContext } from 'react';
import styled from 'styled-components';
import DayContext from './Days'

const RepeatOn = () => {
  const context = useContext(DayContext);

  const Section = styled.section`
    border: 1px red solid;
    width: 375px;
    height: 70px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  `;

  const Span = styled.span`
    margin-left: 20px;
  `;

  const CircleContainer = styled.div`
    border: 1px red solid;
    width: 350px;
    height: 25px;
    margin-left: 20px;
    display: flex;
  `;

  const Circle = styled.div`
    width: 25px;
    height: 25px;
    background: #f1f3f4;
    border-radius: 50%;
    margin-right: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    cursor: pointer;
  `;

  return(
    <Section>
      <Span>se repite el:</Span>
      <CircleContainer>
        <Circle>{context.sunday}</Circle>
        <Circle>{context.monday}</Circle>
        <Circle>{context.tuesday}</Circle>
        <Circle>{context.wednesday}</Circle>
        <Circle>{context.thurday}</Circle>
        <Circle>{context.friday}</Circle>
        <Circle>{context.saturday}</Circle>
      </CircleContainer>
    </Section>
  )
}

export default RepeatOn;