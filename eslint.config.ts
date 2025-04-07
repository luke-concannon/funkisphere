import eslintReactPlugin from "@eslint-react/eslint-plugin"
import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import stylisticPlugin from "@stylistic/eslint-plugin"
import prettierConfig from "eslint-config-prettier/flat"
// @ts-expect-error - no types declared
import onlyWarnPlugin from "eslint-plugin-only-warn"
import regexpPlugin from "eslint-plugin-regexp"
import sonarjs from "eslint-plugin-sonarjs"
import unicornPlugin from "eslint-plugin-unicorn"
import globals from "globals"
import tseslint from "typescript-eslint"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const config = tseslint.config(
  // This acts as a global ignores, replacing .eslintignore.
  // Required to be first config object.
  {
    ignores: [
      "**/build/**",
      "**/dist/**",
      "**/node_modules/**",
      "**/.next/**",
      "public/**",
      "next.config.js",
      "postcss.config.js",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  unicornPlugin.configs.recommended,
  sonarjs.configs.recommended,
  stylisticPlugin.configs.recommended,
  regexpPlugin.configs["flat/recommended"],
  eslintReactPlugin.configs.recommended,
  eslintReactPlugin.configs["recommended-type-checked"],
  ...compat.config({
    plugins: ["@regru/prefer-early-return"],
    extends: ["next/core-web-vitals", "plugin:drizzle/all"],
    settings: {
      next: {
        rootDir: ".",
      },
    },
    rules: {
      "@regru/prefer-early-return/prefer-early-return": [
        1,
        {
          maximumStatements: 1,
        },
      ],
      "react/self-closing-comp": [
        1,
        {
          component: true,
          html: true,
        },
      ],
    },
  }),
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      "only-warn": onlyWarnPlugin,
    },
    rules: {
      "unicorn/switch-case-braces": [1, "avoid"],
      "unicorn/no-null": 0,
      "unicorn/prevent-abbreviations": [
        1,
        {
          allowList: {
            props: true,
            Props: true,
            params: true,
            Params: true,
            ref: true,
            Ref: true,
            env: true,
            Env: true,
            utils: true,
            Utils: true,
            lib: true,
            Lib: true,
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
  },
  {
    // disable type-aware linting on JS files
    files: ["**/*.js"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  // Required to be last to turn off other conflicting rules
  prettierConfig
)

export default config
