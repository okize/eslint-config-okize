const commonRules = require('./rules/common');
const reactRules = require('./rules/react');
const a11yRules = require('./rules/a11y');

module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  parser: 'babel-eslint',
  rules: {
    ...commonRules,
    ...reactRules,
    ...a11yRules,
  },
};
