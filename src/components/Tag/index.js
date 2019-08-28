import React from 'react';

const Tag = ({ option, onDeselect, icon, isFirst }) => {
  return (
    <div
      className="tag"
      style={{
        display: 'flex',
        alignContent: 'center',
        margin: '0 20px 10px 0',
        borderRadius: '5px',
        backgroundColor: '#C4C4C4',
        color: '#2D2626',
        fontSize: '12px',
        padding: '4px'
      }}
    >
      <p
        style={{
          margin: 0,
          marginRight: '8px'
        }}
      >
        {option.label}
      </p>
      <div
        className="tag-close-icon"
        onClick={() => {
          onDeselect(option);
        }}
        style={{ height: 'auto', cursor: 'pointer' }}
      >
        {icon}
      </div>
    </div>
  );
};

export default Tag;
