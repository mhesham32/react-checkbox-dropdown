import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import CheckboxDropdownComponent from '../../src';

const options = [
  'Rick Sanchez',
  'Morty Smith',
  'Summer Smith',
  'Alien Rick',
  'Alien Morty'
].map(item => ({ key: item, value: item, label: item }));

function Demo() {
  const [checkboxValue, setValue] = useState([]);
  return (
    <CheckboxDropdownComponent
      displayText="Choose your favourite character"
      options={options}
      onChange={option => {
        if (!checkboxValue.includes(option)) {
          setValue(state => state.push(option));
        }
      }}
      onDeselectOption={option => {
        setValue(state => {
          state = state.filter(item => item.value === option.value);
        });
      }}
      value={checkboxValue}
    />
  );
}

render(<Demo />, document.querySelector('#demo'));
