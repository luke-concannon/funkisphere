import stylisticPlugin from "@stylistic/eslint-plugin"
import tseslint from "typescript-eslint"

export const stylisticConfig = tseslint.config(
  stylisticPlugin.configs.recommended
)
