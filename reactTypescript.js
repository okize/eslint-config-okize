const commonRules = require('./rules/common');
const reactRules = require('./rules/react');
const a11yRules = require('./rules/a11y');
const reactTypescript = require('./rules/reactTypescript');

module.exports = {
  extends: ['airbnb-typescript', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    ...commonRules,
    ...reactRules,
    ...a11yRules,
    ...reactTypescript,
  },
};
