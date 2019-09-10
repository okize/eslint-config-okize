module.exports = {
  extends: ['okize/reactNativeTypescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    __DEV__: true, // this is a special env var provided by RN used to determine dev/prod mode
    fetch: true, // RN provides the Fetch API
  },
  rules: {
    // add overrides here
  },
};
