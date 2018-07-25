const _ = require('lodash')

module.exports = {
  testMatch: ['**/(*.)unit.js'],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '@/([^\\.]*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: [],
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/**/*.{js}',
    '!src/**/index.js',
    '!**/node_modules/**',
  ],
  globals: {},
}
