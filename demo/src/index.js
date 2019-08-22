import React from 'react';
import { render } from 'react-dom';
import './style.css';
import CheckboxDropdownComponent from '../../src';

function Demo() {
  return (
    <CheckboxDropdownComponent displayText="Choose your favourite character" />
  );
}

render(<Demo />, document.querySelector('#demo'));
