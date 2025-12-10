// eslint.config.js

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint'; // TypeScript ESLint をインポート
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  
  // ----------------------------------------------------
  // 1. TypeScript と React の設定 (ts, tsx ファイルを対象)
  // ----------------------------------------------------
  ...tseslint.configs.recommended, // TypeScript の推奨ルールを適用
  
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // 対象ファイルを TypeScript に拡張
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    
    languageOptions: {
      // TypeScript パーサーを指定
      parser: tseslint.parser, 
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        // tsconfig.json のパスを指定 (型チェックを有効化)
        project: './tsconfig.json', 
      },
      globals: globals.browser,
    },
    
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    
    rules: {
      // TypeScript では型でチェックされるため、組み込みの no-unused-vars はオフにすることが推奨される
      'no-unused-vars': 'off',
      // 代わりに TypeScript の no-unused-vars を使用
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // その他のカスタムルール
      // ...
    },
  },
]);
