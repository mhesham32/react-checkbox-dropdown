import React, { useState } from 'react';

const Checkbox = ({ isChecked, checkboxStyle, checkedStyle }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <div
      className="checkbox"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{
        height: '20px',
        width: '20px',
        border: '1px solid #000',
        marginRight: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...checkboxStyle({ isChecked, isHovered })
      }}
    >
      {isChecked && (
        <div
          className="checked"
          style={{
            width: '60%',
            height: '60%',
            backgroundColor: '#A39A9A',
            ...checkedStyle()
          }}
        />
      )}
    </div>
  );
};

export default Checkbox;
