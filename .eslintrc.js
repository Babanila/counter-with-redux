module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  globals: {
    __PATH_PREFIX__: true,
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["node", "react", "react-hooks", "jest", "prettier"],
  rules: {
    strict: ["error", "global"],
    "react/prop-types": 0,
    "no-console": 1,
    omitLastInOneLineBlock: 0,
    semi: ["error", "never"],
    quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "jsx-quotes": ["error", "prefer-double"],
    "template-tag-spacing": ["error", "always"],
    "no-template-curly-in-string": "error",
    "no-trailing-spaces": ["error", { skipBlankLines: true, ignoreComments: true }],
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "no-extend-native": ["warn", { exceptions: ["Object", "Array"] }],
    "react/display-name": 0,
    "import/namespace": 0
  }
}
