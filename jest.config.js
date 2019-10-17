module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/*.{js,vue}',
    'src/*.{js,vue}',
    '!src/main.js',
    '!**/node_modules/**',
  ],
  coverageReporters: [
    'html',
    'text-summary',
  ],
};
