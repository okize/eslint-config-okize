const testRules = require('./rules/jest');

module.exports = {
  plugins: ['jest'],
  rules: {
    ...testRules,
  },
};
