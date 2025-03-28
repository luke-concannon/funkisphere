import { FlatCompat } from "@eslint/eslintrc"
import regexpPlugin from "eslint-plugin-regexp"
import sonarjs from "eslint-plugin-sonarjs"
import unicornPlugin from "eslint-plugin-unicorn"
import tseslint from "typescript-eslint"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export const bestPracticeConfig = tseslint.config(
  unicornPlugin.configs.recommended,
  sonarjs.configs.recommended,
  regexpPlugin.configs["flat/recommended"],
  ...compat.config({
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
    rules: {
      "sonarjs/prefer-read-only-props": 0,
      "unicorn/switch-case-braces": [1, "avoid"],
      "unicorn/prevent-abbreviations": [
        1,
        {
          allowList: {
            props: true,
            params: true,
            Params: true,
            ref: true,
            Ref: true,
            env: true,
            Env: true,
          },
        },
      ],
    },
  },
  {
    files: ["**/*.jsx", "**/*.tsx"],
    ignores: [
      "**/page.tsx",
      "**/layout.tsx",
      "**/icon.tsx",
      "**/template.tsx",
      "**/loading.tsx",
      "**/not-found.tsx",
      "**/middleware.tsx",
      "**/error.tsx",
      "**/default.tsx",
      "**/robots.tsx",
      "**/forbidden.tsx",
      "**/unauthorized.tsx",
    ],
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
    files: ["**/*.ts", "**/*.js"],
    rules: {
      "unicorn/filename-case": [
        1,
        {
          cases: { camelCase: true, kebabCase: true },
        },
      ],
    },
  }
)
