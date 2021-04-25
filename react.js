const commonRules = require('./rules/common');
const reactRules = require('./rules/react');
const a11yRules = require('./rules/a11y');

module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    ...commonRules,
    ...reactRules,
    ...a11yRules,
  },
};
