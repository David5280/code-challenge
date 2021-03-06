module.exports = {
  extends: 'airbnb-base',
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  globals: {
    "jest": true,
    "expect": true,
    "mockFn": true,
    "config": true,
    "afterEach": true,
    "beforeEach": true,
    "describe": true,
    "it": true,
    "runs": true,
    "waitsFor": true,
    "pit": true,
    "require": true,
    "xdescribe": true,
    "xit": true
  }
}