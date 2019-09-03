function createStyles({
  container = function({ isOpen, isFocused }) {
    return {};
  },
  options = function({ isOpen }) {
    return {};
  },
  option = function({ isHovered, isFocused, isSelected }) {
    return {};
  },
  toggleButton = function({ isOpen, isFocused }) {
    return {};
  },
  displayText = function({ isOpen, isFocused }) {
    return {};
  },
  checkboxBody = function({ isChecked, isHovered }) {
    return {};
  },
  checkboxDot = function() {
    return {};
  },
  addValue = function({ isInputShown, isSuccess }) {
    return {};
  },
  addValueButton = function({ isInputShown, isSuccess }) {
    return {};
  },
  addValueInput = function({ isFocused, isSuccess }) {
    return {};
  },
  tagsContainer = function() {
    return {};
  },
  tag = function({ isHovered }) {
    return {};
  }
}) {
  const fakeState = {
    isOpen: false,
    isClosed: true,
    isHovered: false,
    isFocused: false,
    isSelected: true
  };
  const theStylesObject = arguments[0];
  const methodNames = [
    'container',
    'options',
    'option',
    'toggleButton',
    'displayText',
    'checkboxBody',
    'checkboxDot',
    'addValue',
    'addValueButton',
    'addValueInput',
    'tagsContainer',
    'tag'
  ];
  for (let method in theStylesObject) {
    // checking for the styles object method names
    if (!methodNames.includes(method)) {
      throw Error(
        `the  ${method} must be named as one of the following array ${methodNames}`
      );
    }
    // check if every method of the styles object is a function
    if (typeof theStylesObject[method] !== 'function') {
      throw Error(
        `the  ${method} must be a function returing an object containing the styles`
      );
    }
    // check if every method returns an object
    if (typeof theStylesObject[method](fakeState) !== 'object') {
      throw Error(
        `the function ${method} must return an object containing the styles`
      );
    }
  }
  return {
    container,
    options,
    option,
    toggleButton,
    displayText,
    checkboxBody,
    checkboxDot,
    addValue,
    addValueButton,
    addValueInput,
    tagsContainer,
    tag
  };
}

export default createStyles;
