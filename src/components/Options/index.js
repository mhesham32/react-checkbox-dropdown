import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ isOpen, children, styleFunc }) => {
  return (
    <div
      className="options"
      style={{
        transform: `scaleY(${isOpen ? '1' : '0'})`,
        height: isOpen ? `auto` : '0',
        maxHeight: isOpen ? '650px' : '0',
        overflowY: 'scroll',
        transition: 'all .3s ease-in-out',
        ...styleFunc({ isOpen })
      }}
    >
      {children}
    </div>
  );
};

Options.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf([PropTypes.node, PropTypes.element]).isRequired,
  style: PropTypes.object
};

Options.defaultProps = {
  styleFunc: function() {}
};

export default Options;
