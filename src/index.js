import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Options from './components/Options';
import Option from './components/Option';
import CheckBox from './components/Checkbox';

import initOptions from './helpers/initOptions';
import checkSelectedOption from './helpers/checkSelectedOption';
import upIcon from './assets/upIcon.svg';
import downIcon from './assets/downIcon.svg';
import createStyles from './createStyles';

function CheckboxDropdownComponent({
  options,
  value,
  displayText,
  onChange,
  onOpen,
  onClose,
  style,
  openIcon,
  closeIcon,
  isStrict,
  onDeselectOption,
  displayValues,
  closeAfterSelect
}) {
  const [isOpen, setOpen] = useState(false);
  const [isFocused, setFocus] = useState(false);
  const buttonRef = useRef();

  return (
    <div
      className="container"
      style={{
        width: '100%',
        maxWidth: '570px',
        border: `.5px solid ${isFocused ? '#377caf' : '#797474'}`,
        overflow: 'hidden',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        backgroundColor: '#fff',
        fontFamily:
          'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
      }}
    >
      <button
        className="display-text-button"
        ref={buttonRef}
        style={{
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          width: '100%',
          boxShadow: 'none',
          backgroundColor: 'inherit',
          borderRadius: '5px',
          border: `.5px solid transparent`,
          padding: '0',
          margin: '0'
        }}
        onClick={() => {
          setOpen(!isOpen);
        }}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      >
        <h3
          className="display-text"
          style={{ paddingLeft: '22px', fontSize: '18px', marginRight: 'auto' }}
        >
          {displayText}
        </h3>
        <div
          className="icon"
          style={{ height: '24px', width: '24px', marginRight: '10px' }}
        >
          {isOpen ? openIcon : closeIcon}
        </div>
      </button>
      <Options isOpen={isOpen}>
        {initOptions(options).map((option, index) => (
          <Option
            index={index}
            option={option}
            onChange={onChange}
            onDeselectOption={onDeselectOption}
            Checkbox={
              <CheckBox isChecked={checkSelectedOption(option, value)} />
            }
            isSelected={checkSelectedOption(option, value)}
          />
        ))}
      </Options>
    </div>
  );
}

CheckboxDropdownComponent.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      label: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      label: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  displayText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  style: PropTypes.objectOf({
    checkboxBody: PropTypes.func,
    icon: PropTypes.func,
    activeOption: PropTypes.func,
    options: PropTypes.func
  }),
  openIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  closeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  isStrict: PropTypes.bool,
  onDeselectOption: PropTypes.func,
  displayValues: PropTypes.bool,
  closeAfterSelect: PropTypes.bool
};

CheckboxDropdownComponent.defaultProps = {
  onOpen() {},
  onClose() {},
  style: {
    checkboxBody: function() {},
    icon: function() {},
    activeOption: function() {},
    options: function() {}
  },
  openIcon: <img src={upIcon} alt="Arrow Icon pointing up" />,
  closeIcon: <img src={downIcon} alt="Arrow Icon pointing down" />,
  isStrict: true,
  onDeselectOption() {},
  displayValues: false,
  closeAfterSelect: false
};

export { createStyles };
export default CheckboxDropdownComponent;
