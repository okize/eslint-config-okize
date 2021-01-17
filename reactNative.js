const commonRules = require('./rules/common');
const reactRules = require('./rules/react');
const reactNativeRules = require('./rules/reactNative');

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react-native/all', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    ...commonRules,
    ...reactRules,
    ...reactNativeRules,
  },
};
