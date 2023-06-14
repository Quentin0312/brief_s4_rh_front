module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:prettier/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  "plugins": [
    "@typescript-eslint", "solid"
  ],
  "rules": {
    "solid/reactivity": "warn",
    "solid/no-destructure": "warn",
    "solid/jsx-no-undef": "error",
    quotes: "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
  ignorePatterns: [".eslintrc.js", "node_modules", "dist","*.config.*"],
  overrides: [],
};

