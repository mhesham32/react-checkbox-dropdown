import React from 'react';
import { render } from 'react-dom';
import './style.css';
import CheckboxDropdownComponent from '../../src';

function Demo() {
  return <CheckboxDropdownComponent />;
}

render(<Demo />, document.querySelector('#demo'));
