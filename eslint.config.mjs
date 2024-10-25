import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astroParser from 'astro-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {},
  },
  {
    files: ['**/*.astro'],

    languageOptions: {
      parser: astroParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: tsParser,
      },
    },
  },
  {
    files: ['**/*.d.ts'],

    rules: {
      '@typescript-eslint/triple-slash-reference': [
        'error',
        { path: 'always' },
      ],
    },
  },
];
