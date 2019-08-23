function checkSelectedOption(option = {}, value = []) {
  let isSelected = false;
  value.forEach(item => {
    if (item.value === option.value) {
      isSelected = true;
    }
  });
  return isSelected;
}

export default checkSelectedOption;
