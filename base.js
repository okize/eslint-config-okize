const commonRules = require('./rules/common');

module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    ...commonRules,
  },
};
