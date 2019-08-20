function createStyles({
  checkboxBody = function({ isOpen, isClosed }) {
    return {};
  },
  icon = function({ isOpen, isClosed }) {
    return {};
  },
  activeOption = function({ isMouseIn, isMouseOut, isFocused, isSelected }) {
    return {};
  },
  options = function({ isOpen, isClosed }) {
    return {};
  }
}) {
  const fakeState = {
    isOpen: false,
    isClosed: true,
    isMouseIn: false,
    isMouseOut: true,
    isFocused: false,
    isSelected: true
  };
  const theStylesObject = arguments[0];
  const methodNames = ['checkboxBody', 'icon', 'activeOption', 'options'];
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
    checkboxBody,
    icon,
    activeOption,
    options
  };
}

export default createStyles;
