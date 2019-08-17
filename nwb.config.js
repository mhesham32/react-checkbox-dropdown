module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'checkboxDropdownComponent',
      externals: {
        react: 'React'
      }
    }
  }
}
