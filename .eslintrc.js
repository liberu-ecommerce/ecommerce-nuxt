module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
    // "cypress/globals": true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:nuxt/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/script-setup-no-uses-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
};
