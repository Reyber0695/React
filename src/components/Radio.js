import React from 'react';
import styled from 'styled-components';

const Radio = () => {
  const Section = styled.section`
    border: 1px red solid;
    width: 375px;
    height: 150px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `;

  const Span = styled.span`
    margin-left: 20px;
  `
  ;

  const Radiocontainer = styled.div`
    border: 1px red solid;
    width: 335px;
    height: 100px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 10px;

    div label {
      margin-left: 10px;
    }

    div.radio-the {
      
      input[type="text"] {
        margin-left: 90px;
        width: 90px;
      }
    }

    div.radio-before {
      input[type="text"] {
        margin-left: 15px;
        width: 120px;
      }
    }

  `;

  return (
    <Section>
      <Span>Termina</Span>
      <Radiocontainer>
        <div>
          <input type="radio" name="no-finish" id="no-finish"/>
          <label for="no-finish">Nunca</label>
        </div>
        <div className="radio-the">
          <input type="radio" name="el" id="el"/>
          <label for="el">El</label>
          <input type="text" name="date" id="date"/>
        </div>
        <div className="radio-before">
          <input type="radio" name="before" id="before"/>
          <label for="efore">Despues del</label>
          <input type="text" name="date" id="date"/>
        </div>
      </Radiocontainer>
    </Section>
  )
}

export default Radio;