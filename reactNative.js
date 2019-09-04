const commonRules = require('./rules/common');
const reactRules = require('./rules/react');
const reactNativeRules = require('./rules/reactNative');

module.exports = {
  extends: ['airbnb', 'plugin:react-native/all'],
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  globals: {
    __DEV__: true, // this is a special env var provided by RN used to determine dev/prod mode
    fetch: true, // RN provides the Fetch API
  },
  rules: {
    ...commonRules,
    ...reactRules,
    ...reactNativeRules,
  },
};
