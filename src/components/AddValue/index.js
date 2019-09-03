import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const AddValue = ({
  checkAddedValue,
  addIcon,
  onAddValue,
  inputPlaceholder,
  styleFunc,
  inputStyles,
  buttonStyles
}) => {
  const [value, setValue] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isSuccess, setSuccess] = useState(null);
  const onChange = ({ target }) => {
    setValue(target.value);
  };

  const handleShowInput = () => {
    if (!showInput) {
      setShowInput(true);
    }
  };

  const handleAddValue = () => {
    // add if value accepted and ignore if not
    if (checkAddedValue(value)) {
      onAddValue(value);
      setSuccess(true);
      setValue('');
      setShowInput(false);
    } else {
      setSuccess(false);
    }
  };

  const handleClickAddButton = () => {
    if (showInput) {
      // ignore if there is no value
      if (!value) {
        setSuccess(false);
        return;
      }
      handleAddValue();
    }
  };
  return (
    <div
      className="add-more"
      onClick={handleShowInput}
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '65px',
        paddingLeft: '20px',
        fontSize: '18px',
        color: '#989898',
        ...styleFunc({ isSuccess, isInputShown: showInput })
      }}
    >
      <button
        className="add-icon"
        onClick={handleClickAddButton}
        style={{
          height: '20px',
          width: '20px',
          backgroundColor: 'inherit',
          marginRight: '20px',
          cursor: 'pointer',
          padding: '0',
          border: 'none',
          boxShadow: 'none',
          outline: 'none',
          ...buttonStyles({ isSuccess, isInputShown: showInput })
        }}
      >
        {addIcon}
      </button>
      <Input
        value={value}
        onChange={onChange}
        showInput={showInput}
        isSuccess={isSuccess}
        onSubmit={handleAddValue}
        placeholder={inputPlaceholder}
        styleFunc={inputStyles}
      />
    </div>
  );
};

AddValue.propTypes = {
  checkAddedValue: PropTypes.func.isRequired,
  addIcon: PropTypes.oneOf(PropTypes.element, PropTypes.node),
  onAddValue: PropTypes.func.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  styleFunc: PropTypes.func.isRequired,
  inputStyles: PropTypes.func.isRequired,
  buttonStyles: PropTypes.func.isRequired
};

export default AddValue;
