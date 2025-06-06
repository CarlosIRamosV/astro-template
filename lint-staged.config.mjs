/** @type {import('lint-staged').Configuration} */
export default {
  "*.css": ["stylelint --fix", "prettier --write"],
  "*.{js,mjs,jsx,ts,tsx,astro}": ["eslint --fix", "prettier --write"],
  "*.{json,md,yml,yaml}": ["prettier --write"],
};
