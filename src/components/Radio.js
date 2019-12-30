import React from 'react';
import styled from 'styled-components';

const Radio = () => {
  const Section = styled.section`
    width: 375px;
    height: 180px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `;

  const Span = styled.span`
    margin-left: 20px;
    display: block;
    margin-top: 10px;
  `
  ;

  const Radiocontainer = styled.div`
    width: 335px;
    height: 115px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;

    input[type="text"] {
      width: 80px;
    }
    
    .container {
      display: block;
      position: relative;
      padding-left: 25px;
      cursor: pointer;
      font-size: 16px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      input[type="text"].date {
        margin-left: 80px;
        background: #f1f3f4;
        border: 0;
        width: 125px;
        padding: 5px;
        padding-left: 5px;
      }

      input[type="text"].repeat {
        margin-left: 10px;
        width: 145px;
        background: #f1f3f4;
        border: 0;
        padding: 5px 0;
        padding-left: 5px;
      }

      input[type="text"].date::placeholder,
      input[type="text"].repeat::placeholder {
        color: #9aa0a6;
      }
    }
    
    /* Hide the browser's default radio button */
    .container input[type="radio"] {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }
    
    /* Create a custom radio button */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 15px;
      width: 15px;
      background-color: #f1f3f4;
      border-radius: 50%;
      border: 1px #1a73e8 solid;
    }
    
    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
      background-color: #f1f3f4;
    }
    
    /* When the radio button is checked, add a blue background */
    
    
    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
    
    /* Show the indicator (dot/circle) when checked */
    .container input:checked ~ .checkmark:after {
      display: block;
    }
    
    /* Style the indicator (dot/circle) */
    .container .checkmark:after {
      margin:auto;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #1a73e8;
    }

    .radio-the {
      diplay: flex;
    }

  `;

  return (
    <Section>
      <Span>Termina</Span>
      <Radiocontainer>
        <div>
        <label class="container">Nunca
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmark"></span>
        </label>
        </div>
        <div className="radio-the">
          <label class="container">El
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
            <input type="text" className="date" placeholder="27 de marzo de 2020"/>
          </label>
        </div>
        <div className="radio-before">
          <label class="container">Despues de
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
            <input type="text" className="repeat" placeholder="  13        Repeticiones"/>
          </label>
        </div>
      </Radiocontainer>
    </Section>
  )
}

export default Radio;