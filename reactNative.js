const commonRules = require('./rules/common');
const reactRules = require('./rules/react');
const reactNativeRules = require('./rules/reactNative');

module.exports = {
  extends: ['airbnb', 'plugin:react-native/all'],
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  rules: {
    ...commonRules,
    ...reactRules,
    ...reactNativeRules,
  },
};
