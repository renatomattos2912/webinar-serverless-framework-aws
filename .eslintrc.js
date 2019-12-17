module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
  },
  extends: ['standard'],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // do not allow console.logs etc...
    'no-console': 2,
    // end of line space
    'eol-last': 0,
    // Control strict mode
    strict: 0,
    //
    'object-curly-spacing': [2, 'always'],
    'no-return-await': 0,
  },
  globals: {
    use: true,
  },
};
