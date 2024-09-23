module.exports = {
  jest: (config) => {
    config.transformIgnorePatterns = [
      "/node_modules/(?!d3|d3-array|internmap|delaunator|robust-predicates)",
    ];

    config.reporters = [
      "default",
      [
        "jest-html-reporters",
        {
          publicPath: "./public/test-report",
          filename: "report.html",
          expand: true,
        },
      ],
    ];

    config.moduleNameMapper = {
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    };

    return config;
  },
};
