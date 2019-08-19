import React from 'react';
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
  closedIcon,
  isStrict,
  onDeselectItem,
  displayValues,
  closeAfterSelect
}) {
  return (
    <div>
      <h1>Hello!! {closedIcon}</h1>
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
  style: PropTypes.func,
  openIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  closedIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  isStrict: PropTypes.bool,
  onDeselectItem: PropTypes.func,
  displayValues: PropTypes.bool,
  closeAfterSelect: PropTypes.bool
};

CheckboxDropdownComponent.defaultProps = {
  onOpen() {},
  onClose() {},
  style() {},
  openIcon: (
    <span>
      <img src={upIcon} alt="Arrow Icon pointing up" />
    </span>
  ),
  closedIcon: (
    <span>
      <img src={downIcon} alt="Arrow Icon pointing down" />
    </span>
  ),
  isStrict: true,
  onDeselectItem() {},
  displayValues: false,
  closeAfterSelect: true
};
