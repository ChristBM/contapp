module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
/*   rules: {
    // 'semi': ['error', 'always'],
    // "react/no-unescaped-entities": "off",
    // "@next/next/no-page-custom-font": "off",
    // 'prettier/prettier': 0,
  } */
}