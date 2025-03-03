import { sheriff, tseslint, type SheriffSettings } from "eslint-config-sheriff"

const sheriffOptions: SheriffSettings = {
  react: true,
  next: true,
  astro: false,
  lodash: false,
  remeda: false,
  playwright: false,
  jest: false,
  vitest: false,
}

export default tseslint.config(sheriff(sheriffOptions), {
  rules: {
    "func-style": 0,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "simple-import-sort/imports": 0,
  },
})
