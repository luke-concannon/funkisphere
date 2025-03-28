import prettierConfig from "eslint-config-prettier/flat"
// @ts-expect-error - no types declared
import onlyWarnPlugin from "eslint-plugin-only-warn"
import tseslint from "typescript-eslint"

import { baseConfig } from "./configs/base"
import { bestPracticeConfig } from "./configs/bestPractice"
import { nextConfig } from "./configs/next"
import { stylisticConfig } from "./configs/stylistic"
import { tsConfig } from "./configs/typescript"

const config = tseslint.config(
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...baseConfig,
  ...tsConfig,
  ...bestPracticeConfig,
  ...stylisticConfig,
  ...nextConfig,
  {
    plugins: {
      "only-warn": onlyWarnPlugin,
    },
  },
  {
    ignores: ["**/build/**", "**/dist/**", "**/node_modules/**", "**/.next/**"], // This acts as a global ignores
  },
  prettierConfig // Required to be last to turn off other conflicting rules
)

export default config
