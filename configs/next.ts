import { FlatCompat } from "@eslint/eslintrc"
import tseslint from "typescript-eslint"

/**
 * eslint-config-next includes the following plugins:
 * - eslint-plugin-next
 * - eslint-plugin-react
 * - eslint-plugin-react-hooks
 * - eslint-plugin-import
 * - eslint-plugin-jsx-a11y
 */

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export const nextConfig = tseslint.config(
  ...compat.extends("next/core-web-vitals", "next/typescript")
)
