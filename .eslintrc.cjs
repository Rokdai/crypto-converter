module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unused-imports", "eslint-plugin-import"],
  root: true,
  rules: {
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-empty-function": "off",
    "unused-imports/no-unused-imports": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "import/order": [
      "off",
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
        pathGroups: [
          {
            pattern: "components",
            group: "internal",
          },
          {
            pattern: "common",
            group: "internal",
          },
          {
            pattern: "routes/ **",
            group: "internal",
          },
          {
            pattern: "assets/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
