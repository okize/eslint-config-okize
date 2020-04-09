const testRules = require('./rules/jest');

module.exports = {
  plugins: ['jest', 'jest-formatting'],
  rules: {
    ...testRules,
  },
};
