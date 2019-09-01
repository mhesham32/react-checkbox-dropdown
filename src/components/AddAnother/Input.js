import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  value,
  onChange,
  showInput,
  placeholder,
  error,
  onSubmit
}) => {
  const [isFocused, setFocus] = useState(false);

  const handleKeyDown = event => {
    if (isFocused) {
      console.log(event.keyCode);
      if (event.keyCode === 13) {
        onSubmit();
      }
    }
  };

  return showInput ? (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      onFocus={() => {
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
      style={{
        height: '50px',
        width: '100%',
        border: `1px solid ${error ? '#dc3545' : '#000'}`,
        borderRadius: '12px',
        marginRight: '20px',
        paddingLeft: '10px',
        fontSize: '18px'
      }}
      placeholder={error ? 'Please enter a valid option' : ''}
    />
  ) : (
    <p className="placeholder">{placeholder}</p>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showInput: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};

Input.defaultProps = {
  error: false
};

export default Input;
