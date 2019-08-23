function initOptions(options = []) {
  // make sure the array has no duplicated options
  const result = [];
  const uniqueOptions = new Set(
    options
      .map(option => option.value)
      .map(value => options.find(item => item.value === value))
  ).forEach(item => {
    result.push(item);
  });
  return result;
}
export default initOptions;
