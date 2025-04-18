import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledWrapper>
      <div className="input-group">
        <input type="email" className="input" id="Email" name="Email" placeholder="contatus@weblocators.com" autoComplete="off" />
        <input className="button--submit" defaultValue="Subscribe" type="submit" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input-group {
    display: flex;
    align-items: center;
  }

  .input {
    min-height: 50px;
    max-width: 15rem;
    padding: 0 1rem;
    color: #fff;
    font-size: 15px;
    border: 1px solid #c0dbff  ;
    border-radius: 6px 0 0 6px;
    background-color: transparent;
  }

  .button--submit {
    min-height: 50px;
    padding: .5em 1em;
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: #c0dbff ;
    font-weight:600;
    color: #1e1e1e;
    font-size: 15px;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
  }

  .button--submit:hover {
    background-color: #81b1f0;
  }

  .input:focus, .input:focus-visible {
    border-color: #81b1f0;
    outline: none;
  }`;

export default Input;
