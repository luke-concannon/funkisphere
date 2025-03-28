import eslintReactPlugin from "@eslint-react/eslint-plugin"
import reactHooksExtraPlugin from "eslint-plugin-react-hooks-extra"
import tseslint from "typescript-eslint"

export const nextConfig = tseslint.config(
  eslintReactPlugin.configs.recommended,
  eslintReactPlugin.configs["recommended-type-checked"],
  reactHooksExtraPlugin.configs.recommended
)
