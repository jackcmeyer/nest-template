module.exports = {
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.ts',]
      }
    }
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}]
  },
};
