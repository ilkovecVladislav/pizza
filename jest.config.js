process.env.NODE_ENV = 'test';

module.exports = {
  ...require('@snowpack/app-scripts-react/jest.config.js')(),
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!/node_modules/',
    '!src/index.tsx',
    '!src/pages/',
    '!src/serviceWorker.ts',
  ],
  coveragePathIgnorePatterns: [
    './src/*/*.types.{ts,tsx}',
    './src/pages/',
    './src/index.tsx',
    './src/serviceWorker.ts',
  ],
  coverageReporters: ['json', 'html'],
  coverageThreshold: {
    global: {
      branches: 75,
      statements: 75,
      lines: 75,
      functions: 75,
    },
  },
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
  },
};
