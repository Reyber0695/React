import React from 'react';
import styled from 'styled-components';

const RepeatEach = () => {
  const Section = styled.section`
    width: 375px;
    height: 50px;
    margin: auto;
    display: flex;
    align-items: center;
  `;

  const Label = styled.label`
    margin-left: 20px;
  `;

  const Input = styled.input`
    width: 40px;
    padding: 10px 0px;
    padding-left: 10px;
    margin-left: 10px;
    border: 0;
    background: #f1f3f4; 
  `;

  const Select = styled.select`
    width: 80px;
    padding: 9px 0px;
    padding-left: 5px;
    margin-left: 10px;
    border: 0;
    background: #f1f3f4;
  `;

  return (
    <Section>
      <Label>Repetir cada</Label>
      <Input type="number" defaultValue="1"/>
      <Select>
        <option value="day">Dia</option>
        <option value="week" selected>Semana</option>
        <option value="month">Mes</option>
        <option value="year">Anio</option>
      </Select>
    </Section>
  )
}

export default RepeatEach;