const commonRules = require('./rules/common');
const reactRules = require('./rules/react');
const a11yRules = require('./rules/a11y');
const reactTypescript = require('./rules/reactTypescript');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
  ],
  plugins: [
    'react-hooks',
  ],
  rules: {
    ...commonRules,
    ...reactRules,
    ...a11yRules,
    ...reactTypescript,
  },
};
