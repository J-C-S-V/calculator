import React from 'react';
import './button_clear.css';

export const ButtonClear = (props) => (
  <button className="button-clear" onClick={props.handleClear}>
    {props.children}
  </button>
);
