const commonRules = require('./rules/common');

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    ...commonRules,
  },
};
