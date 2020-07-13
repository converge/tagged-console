module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
