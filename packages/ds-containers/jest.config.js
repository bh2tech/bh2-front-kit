const base = require('../../jest.config.js')

module.exports = {
  ...base,
  displayName: 'DS',
  transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
}
