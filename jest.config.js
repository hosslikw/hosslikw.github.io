module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  testEnvironment: "node"
};
module.exports = {
  // ...other configuration...
  moduleNameMapper: {
    '\\.scss$': '<rootDir>/__mocks__/styleMock.js'
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  testEnvironment: 'node'
};
