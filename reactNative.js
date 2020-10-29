const commonRules = require('./rules/common');
const reactRules = require('./rules/react');
const reactNativeRules = require('./rules/reactNative');

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react-native/all',
  ],
  parser: 'babel-eslint',
  rules: {
    ...commonRules,
    ...reactRules,
    ...reactNativeRules,
  },
};
