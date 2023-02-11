import React from 'react';
import './button.css';

export function Button(props) {
  const isOperator = (value) => {
    return isNaN(value) && value !== '.' && value !== '=';
  };
  return (
    <button
      className={`button-container ${
        isOperator(props.children) ? 'operator' : ''
      }`.trimEnd()}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </button>
  );
}
