import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ children, styleFunc }) => {
  if (!children.length) return null;
  return (
    <div
      className="tags"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '10px 0',
        paddingLeft: '22px',
        ...styleFunc()
      }}
    >
      {children}
    </div>
  );
};

Tags.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  styleFunc: PropTypes.func.isRequired
};

export default Tags;
