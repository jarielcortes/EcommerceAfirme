module.exports = {
  transformIgnorePatterns: [
    "/node_modules/(?!d3|d3-array|internmap|delaunator|robust-predicates)",
  ],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./public/test-report",
        filename: "report.html",
        expand: true,
      },
    ],
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
