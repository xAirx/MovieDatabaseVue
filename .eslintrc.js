// .eslintrc.js vuetify
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
    "@vue/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  parser: "vue-eslint-parser",
  plugins: ["@typescript-eslint", "vue"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    project: "./tsconfig.json",
    extraFileExtensions: [".vue"],
  },

  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-async-promise-executor": "off",
    "jest/expect-expect": "off",
    "jest/no-try-expect": "off",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
  },

  overrides: [
    {
      files: ["**/*.test.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
