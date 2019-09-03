import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Options from './components/Options';
import Option from './components/Option';
import CheckBox from './components/Checkbox';
import Tags from './components/Tags';
import Tag from './components/Tag';
import AddValue from './components/AddValue';

import initOptions from './helpers/initOptions';
import checkSelectedOption from './helpers/checkSelectedOption';
import { UpIcon, DownIcon, XIcon, AddIcon } from './icons';
import createStyles from './createStyles';

function CheckboxDropdownComponent({
  options,
  value,
  displayText,
  onChange,
  onOpen,
  onClose,
  checkAddedValue,
  style,
  openIcon,
  closeIcon,
  tagXIcon,
  addIcon,
  isStrict,
  onDeselectOption,
  displayTags,
  inputPlaceholder
}) {
  const [isOpen, setOpen] = useState(false);
  const [isFocused, setFocus] = useState(false);
  const containerRef = useRef(false);

  const {
    container,
    option: optionStyles,
    options: optionsStyles,
    toggleButton,
    checkboxBody,
    checkedDot,
    addValue,
    addValueButton,
    addValueInput,
    displayText: displayTextStyles,
    tagsContainer,
    tag
  } = style;

  useEffect(() => {
    // close the dropdown when clicking away
    function onClickAway(event) {
      const node = containerRef.current;
      if (node && !node.contains(event.target)) {
        setOpen(false);
      }
    }

    if (isOpen && containerRef) {
      document.addEventListener('click', onClickAway);
    } else {
      document.removeEventListener('click', onClickAway);
    }
  }, [isOpen, containerRef]);

  useEffect(() => {
    if (isOpen) {
      onOpen();
    } else {
      onClose();
    }
  }, [isOpen]);

  const onCloseTag = option => {
    onChange(option);
    onDeselectOption(option);
  };

  const onAddAnother = value => {
    const newOption = { label: value, value };
    onChange(newOption);
  };

  return (
    <div
      className="container"
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: '570px',
        border: `.5px solid ${isFocused ? '#377caf' : '#797474'}`,
        overflow: 'hidden',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        backgroundColor: '#fff',
        fontFamily:
          'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
        ...container({ isOpen, isFocused })
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
          border: `.5px solid transparent`,
          padding: '0',
          margin: '0',
          ...toggleButton({ isOpen, isFocused })
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
          style={{
            paddingLeft: '22px',
            fontSize: '18px',
            marginRight: 'auto',
            ...displayTextStyles({ isOpen, isFocused })
          }}
        >
          {displayText}
        </h3>
        <div
          className="icon"
          style={{
            height: '24px',
            width: '24px',
            marginRight: '10px',
            color: 'red'
          }}
        >
          {isOpen ? openIcon : closeIcon}
        </div>
      </button>
      {displayTags && (
        <Tags styleFunc={tagsContainer}>
          {value.map(option => (
            <Tag
              key={`tag-${option.value}`}
              option={option}
              icon={tagXIcon}
              onDeselect={onCloseTag}
              styleFunc={tag}
            />
          ))}
        </Tags>
      )}
      <Options isOpen={isOpen} styleFunc={optionsStyles}>
        {initOptions(options).map((option, index) => (
          <Option
            key={`option-${option.value}`}
            index={index}
            option={option}
            onChange={onChange}
            onDeselectOption={onDeselectOption}
            Checkbox={
              <CheckBox
                isChecked={checkSelectedOption(option, value)}
                checkboxStyle={checkboxBody}
                checkedStyle={checkedDot}
              />
            }
            isSelected={checkSelectedOption(option, value)}
            styleFunc={optionStyles}
          />
        ))}
        {!isStrict && (
          <AddValue
            onAddValue={onAddAnother}
            addIcon={addIcon}
            checkAddedValue={checkAddedValue}
            inputPlaceholder={inputPlaceholder}
            styleFunc={addValue}
            inputStyles={addValueInput}
            buttonStyles={addValueButton}
          />
        )}
      </Options>
    </div>
  );
}

CheckboxDropdownComponent.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.objectOf({
      label: PropTypes.string,
      value: PropTypes.any
    })
  ).isRequired,
  value: PropTypes.arrayOf(
    PropTypes.objectOf({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  displayText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  checkAddedValue: PropTypes.func,
  style: PropTypes.objectOf({
    container: PropTypes.func,
    option: PropTypes.func,
    options: PropTypes.func,
    toggleButton: PropTypes.func,
    displayText: PropTypes.func,
    checkboxBody: PropTypes.func,
    checkedDot: PropTypes.func,
    addValue: PropTypes.func,
    addValueButton: PropTypes.func,
    addValueInput: PropTypes.func,
    tagsContainer: PropTypes.func,
    tag: PropTypes.func
  }),
  openIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  closeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  tagXIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  addIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  isStrict: PropTypes.bool,
  onDeselectOption: PropTypes.func,
  displayTags: PropTypes.bool,
  inputPlaceholder: PropTypes.string
};

CheckboxDropdownComponent.defaultProps = {
  onOpen() {},
  onClose() {},
  checkAddedValue() {
    return true;
  },
  style: {
    container: function() {
      return {};
    },
    option: function() {
      return {};
    },
    options: function() {
      return {};
    },
    toggleButton: function() {
      return {};
    },
    displayText: function() {
      return {};
    },
    checkboxBody: function() {
      return {};
    },
    checkedDot: function() {
      return {};
    },
    addValue: function() {
      return {};
    },
    addValueButton: function() {
      return {};
    },
    addValueInput: function() {
      return {};
    },
    tagsContainer: function() {
      return {};
    },
    tag: function() {
      return {};
    }
  },
  openIcon: <UpIcon />,
  closeIcon: <DownIcon />,
  tagXIcon: <XIcon />,
  addIcon: <AddIcon />,
  isStrict: true,
  onDeselectOption() {},
  displayTags: false,
  inputPlaceholder: 'Add Another Value'
};

export { createStyles };
export default CheckboxDropdownComponent;
