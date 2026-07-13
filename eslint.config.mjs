import next from 'eslint-config-next'

// Next.js 16 ships a native ESLint flat config, so we import it directly
// instead of bridging the legacy shareable config through FlatCompat.
// `eslint-config-next` bundles core-web-vitals + the TypeScript rules.
const eslintConfig = [
  ...next,
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
]

export default eslintConfig
