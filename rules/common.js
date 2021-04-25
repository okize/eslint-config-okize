const prettierConfig = require('./prettierConfig');

// these rules are included in all config types
module.exports = {
  // prettier configuration
  'prettier/prettier': ['error', prettierConfig],
  // force func args to always be in parens
  'arrow-parens': ['error', 'always'],
  // this rule is not particularly useful
  'class-methods-use-this': 'off',
  // this avoids forcing trailing commas in function args
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    },
  ],
  // anonymous exports make grepping code from Dev Tools component tree more difficult
  'import/no-anonymous-default-export': [
    'error',
    {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: true, // for backward compatibility
      allowLiteral: false,
      allowObject: false,
    },
  ],
  // 150 is an arbitrary but reasonable limit
  'max-len': ['error', 150, 4],
  // this will allow unary operators in for loops only
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
};
