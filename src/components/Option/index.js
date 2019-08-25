import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Option = ({
  onChange,
  onDeselectOption,
  option,
  isSelected,
  styleFunc,
  index,
  Checkbox
}) => {
  const [isFocused, setFocus] = useState(false);
  const [isHovered, setHover] = useState(false);
  return (
    <label
      htmlFor={`option-${index}`}
      className="option"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onFocus={() => {
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
      style={{
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '22px',
        height: '50px',
        borderBottom: '.5px solid #A39A9A',
        fontWeight: isSelected ? 'bold' : 'normal',
        cursor: 'pointer',
        ...styleFunc({ isSelected, isFocused, isHovered })
      }}
    >
      <input
        id={`option-${index}`}
        type="checkbox"
        style={{ display: 'none' }}
        value={isSelected}
        checked={isSelected}
        onChange={() => {
          onChange(option);
          if (isSelected) {
            onDeselectOption(option);
          }
        }}
      />
      {Checkbox}
      <p>{option.label}</p>
    </label>
  );
};

Option.propTypes = {
  onChange: PropTypes.func.isRequired,
  onDeselectOption: PropTypes.func,
  option: PropTypes.shape({
    key: PropTypes.any,
    label: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  styleFunc: PropTypes.func,
  index: PropTypes.number.isRequired,
  Checkbox: PropTypes.element.isRequired
};

Option.defaultProps = {
  onDeselectOption() {},
  styleFunc() {}
};

export default Option;
