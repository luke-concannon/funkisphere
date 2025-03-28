import tseslint from "typescript-eslint"

export const tsConfig = tseslint.config(
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked
)
