// these rules are included in all config types

module.exports = {
  // force func args to always be in parens
  'arrow-parens': ['error', 'always'],
  // this rule is not particularly useful
  'class-methods-use-this': 'off',
  // this avoids forcing trailing commas in function args
  'comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'ignore',
  }],
  // the default is 4 arguments, this just bumps it up a bit
  'object-curly-newline': ['error', {
    ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
    ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
    ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
    ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
  }],
  // this prevents `if` clauses from being one-liners without curly braces
  curly: ['error', 'all'],
  // 150 is an arbitrary but reasonable limit
  'max-len': ['error', 150, 4],
  // this will allow unary operators in for loops only
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
};
