module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'plugin:vue-scoped-css/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    "plugin:import/recommended",
    "google",
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
    'project': './tsconfig.json',
    'extraFileExtensions': [
      '.vue',
    ],
  },
  'parser': 'vue-eslint-parser',
  'plugins': [
    'vue',
    '@typescript-eslint',
    'tailwindcss',
  ],
  'rules': {
    'import/no-absolute-path': 'off',
    "import/no-unresolved": "off",
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      }
    ],
    'max-len': ['off'],
    'no-param-reassign': [2, { 'props': false }],
    'no-shadow': 'off',
    'object-curly-spacing': ['error', 'always'],
    // '@typescript-eslint/no-unused-vars': [
    //   'warn',
    //   { 'argsIgnorePattern': '^_', 'ignoreRestSiblings': true }
    // ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'semi': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'error',
    'vue/multi-word-component-names': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {},
    }
  }
}
