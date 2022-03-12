/* eslint-disable max-len */
module.exports = {
  automock: false,
  bail: false,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  coverageDirectory: "<rootDir>/coverage",
  globals: {
    __DEV__: true
  },
  moduleFileExtensions: ["js", "json", "jsx", "node"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
  testEnvironment: "jest-environment-jsdom"
};
