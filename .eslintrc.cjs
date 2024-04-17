const { resolve } = require('path');

module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@emotion'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      /** configファイル用override **/
      files: ['**/*.config.cjs', '**/.*rc.cjs'],
      env: {
        commonjs: true,
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
