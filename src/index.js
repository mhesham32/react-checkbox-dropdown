import React, { useState } from 'react';
import PropTypes from 'prop-types';
import upIcon from './assets/upIcon.svg';
import downIcon from './assets/downIcon.svg';

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
  onDeselectItem,
  displayValues,
  closeAfterSelect
}) {
  const [isOpen, setOpen] = useState(false);
  const [isFocused, setFocus] = useState(false);
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
        style={{
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          width: '100%',
          boxShadow: 'none',
          backgroundColor: 'inherit',
          borderRadius: '5px',
          border: `.5px solid transparent`
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
    </div>
  );
}

export default CheckboxDropdownComponent;

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
  onDeselectItem: PropTypes.func,
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
  onDeselectItem() {},
  displayValues: false,
  closeAfterSelect: true
};
