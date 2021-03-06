// only add jest rules

module.exports = {
  // authoring rules for tests
  'jest/consistent-test-it': 'error',
  'jest/expect-expect': 'error',
  // descriptions are opten named after React components which are capitalized
  'jest/lowercase-name': 'off',
  'jest/no-alias-methods': 'error',
  'jest/no-commented-out-tests': 'error',
  'jest/no-conditional-expect': 'error',
  'jest/no-deprecated-functions': 'error',
  // it is often useful to be allowed to add a .skip
  'jest/no-disabled-tests': 'off',
  'jest/no-done-callback': 'error',
  'jest/no-duplicate-hooks': 'error',
  'jest/no-export': 'error',
  'jest/no-focused-tests': 'error',
  // hooks are testable with react-testing-library
  'jest/no-hooks': 'off',
  'jest/no-identical-title': 'error',
  'jest/no-if': 'error',
  'jest/no-interpolation-in-snapshots': 'error',
  'jest/no-jasmine-globals': 'error',
  'jest/no-jest-import': 'error',
  // reasonable but arbitrary size limit
  'jest/no-large-snapshots': ['error', { maxSize: 500 }],
  'jest/no-mocks-import': 'error',
  'jest/no-restricted-matchers': 'error',
  'jest/no-standalone-expect': 'error',
  'jest/no-test-prefixes': 'error',
  'jest/no-test-return-statement': 'error',
  'jest/prefer-called-with': 'error',
  'jest/prefer-expect-assertions': 'error',
  'jest/prefer-hooks-on-top': 'error',
  'jest/prefer-spy-on': 'error',
  'jest/prefer-strict-equal': 'error',
  'jest/prefer-to-be-null': 'error',
  'jest/prefer-to-be-undefined': 'error',
  'jest/prefer-to-contain': 'error',
  'jest/prefer-to-have-length': 'error',
  'jest/prefer-todo': 'error',
  'jest/require-to-throw-message': 'error',
  'jest/require-top-level-describe': 'error',
  'jest/valid-describe': 'error',
  'jest/valid-expect': 'error',
  'jest/valid-expect-in-promise': 'error',
  'jest/valid-title': 'error',

  // formatting rules for tests
  'jest-formatting/padding-around-after-all-blocks': 'error',
  'jest-formatting/padding-around-after-each-blocks': 'error',
  'jest-formatting/padding-around-before-all-blocks': 'error',
  'jest-formatting/padding-around-before-each-blocks': 'error',
  'jest-formatting/padding-around-expect-groups': 'error',
  'jest-formatting/padding-around-describe-blocks': 'error',
  'jest-formatting/padding-around-test-blocks': 'error',
  'jest-formatting/padding-around-all': 'error',
};
