import pluginJs from '@eslint/js';

/** @type {import('eslint').FlatConfig[]} */
export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        $: 'readonly',
        jQuery: 'readonly'
      }
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-console': 'warn',
      'no-var': 'error',
      'array-bracket-spacing': 'error',
      'comma-dangle': 'warn',
      'comma-spacing': 'warn',
      'comma-style': 'warn',
      'no-nested-ternary': 'error',
      'spaced-comment': 'warn',
      'prefer-const': 'warn',
      'no-trailing-spaces': 'warn',
      'no-lonely-if': 'error',
      'multiline-ternary': 'warn'
    }
  }
];


