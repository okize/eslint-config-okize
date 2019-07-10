const testRules = require('./rules/jest');

module.exports = {
  extends: [
    'plugin:jest/recommended',
  ],
  rules: {
    ...testRules,
  },
};
