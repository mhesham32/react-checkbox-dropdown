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
].map(item => ({ value: item, label: item }));

function Demo() {
  const [checkboxValue, setValue] = useState([]);
  return (
    <CheckboxDropdownComponent
      displayText="Choose your favourite character"
      options={options}
      onChange={option => {
        if (!checkboxValue.includes(option)) {
          const newValue = [...checkboxValue, option];
          setValue(newValue);
        }
      }}
      onDeselectOption={option => {
        const filteredOptions = checkboxValue.filter(
          item => item.value !== option.value
        );
        setValue(filteredOptions);
      }}
      value={checkboxValue}
      displayTags
      isStrict={false}
    />
  );
}

render(<Demo />, document.querySelector('#demo'));
