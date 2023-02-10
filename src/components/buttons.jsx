import React from 'react';

export function Button(props) {
  const isOperator = (value) => {
    return isNaN(value) && value !== '.' && value !== '=';
  };
  return (
    <div
      className={`button-container ${
        isOperator(props.children) ? 'operator' : null
      }`}
    >
      {props.children}
    </div>
  );
}
