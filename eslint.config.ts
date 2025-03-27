import eslintReactPlugin from "@eslint-react/eslint-plugin"
import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import stylisticPlugin from "@stylistic/eslint-plugin"
import prettierConfig from "eslint-config-prettier/flat"
// @ts-expect-error - no types declared
import onlyWarnPlugin from "eslint-plugin-only-warn"
import reactHooksExtraPlugin from "eslint-plugin-react-hooks-extra"
import reactRefreshPlugin from "eslint-plugin-react-refresh"
import regexpPlugin from "eslint-plugin-regexp"
import sonarjs from "eslint-plugin-sonarjs"
import unicornPlugin from "eslint-plugin-unicorn"
import tseslint from "typescript-eslint"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const config = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  unicornPlugin.configs.recommended,
  sonarjs.configs.recommended,
  stylisticPlugin.configs.recommended,
  regexpPlugin.configs["flat/recommended"],
  eslintReactPlugin.configs.recommended,
  eslintReactPlugin.configs["recommended-type-checked"],
  reactHooksExtraPlugin.configs.recommended,
  reactRefreshPlugin.configs.recommended,
  ...compat.config({
    extends: ["next", "next/core-web-vitals", "next/typescript"],
    plugins: ["@regru/prefer-early-return"],
    rules: {
      "@regru/prefer-early-return/prefer-early-return": [
        1,
        {
          maximumStatements: 1,
        },
      ],
    },
  }),
  {
    plugins: {
      "only-warn": onlyWarnPlugin,
    },
  },
  prettierConfig,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "sonarjs/prefer-read-only-props": 0,
      "react-refresh/only-export-components": 0,
      "unicorn/prevent-abbreviations": [
        1,
        {
          allowList: {
            props: true,
            params: true,
            Params: true,
            ref: true,
            Ref: true,
          },
        },
      ],
      "unicorn/switch-case-braces": [1, "avoid"],
    },
  },
  {
    files: ["**/*.jsx", "**/*.tsx"],
    ignores: ["**/page.tsx", "**/layout.tsx", "**/icon.tsx"],
    rules: {
      "unicorn/filename-case": [
        1,
        {
          case: "pascalCase",
        },
      ],
    },
  },
  {
    files: ["*.ts", "*.js"],
    rules: {
      "unicorn/filename-case": [
        1,
        {
          case: "kebabCase",
        },
      ],
    },
  },
  {
    ignores: ["**/build/**", "**/dist/**", "**/node_modules/**", "**/.next/**"],
  }
)

export default config
