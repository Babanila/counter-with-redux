module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
}
const babelOptions = {
  presets: ["babel-preset-react-app"]
}

module.exports = require("babel-jest").createTransformer(babelOptions)
