const commonRules = require('./rules/common');

module.exports = {
  extends: 'airbnb-typescript/base',
  rules: {
    ...commonRules,
  },
};
