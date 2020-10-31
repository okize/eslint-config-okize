const commonRules = require('./rules/common');

module.exports = {
  extends: ['airbnb-typescript/base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    ...commonRules,
  },
};
