import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, onChange, showInput, placeholder, error }) => {
  return showInput ? (
    <input
      type="text"
      value={value}
      onChange={onChange}
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
  placeholder: PropTypes.string,
  error: PropTypes.bool
};

Input.defaultProps = {
  placeholder: 'Add Another Value',
  error: false
};

export default Input;
