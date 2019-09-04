import React, { Fragment, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import CheckboxDropdownComponent, { createStyles } from '../../src';

const options = [
  'Rick Sanchez',
  'Morty Smith',
  'Summer Smith',
  'Alien Rick',
  'Alien Morty'
].map(item => ({ value: item, label: item }));

const style = createStyles({
  container({ isFocused }) {
    return {
      backgroundColor: '#e1a',
      color: 'yellow',
      border: `.5px solid ${isFocused ? 'yellow' : 'transparent'}`
    };
  },
  displayText({ isOpen }) {
    return {
      color: isOpen ? 'yellow' : 'white'
    };
  }
});

function Demo() {
  const [checkboxValue, setValue] = useState([]);
  return (
    <Fragment>
      <div className="defalut">
        <h1>Default Styles</h1>
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
      </div>
      <div className="styled">
        <h1>Custom Styles</h1>
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
          style={style}
        />
      </div>
    </Fragment>
  );
}

render(<Demo />, document.querySelector('#demo'));
