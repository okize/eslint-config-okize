const commonRules = require('./rules/common');
const reactRules = require('./rules/react');
const reactNativeRules = require('./rules/reactNative');
const reactTypescript = require('./rules/reactTypescript');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
  ],
  plugins: [
    'react-hooks',
  ],
  globals: {
    __DEV__: true,
  },
  rules: {
    ...commonRules,
    ...reactRules,
    ...reactNativeRules,
    ...reactTypescript,
  },
};
