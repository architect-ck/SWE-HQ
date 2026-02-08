import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: if your site is at https://<username>.github.io/<repo>/,
// set base to `'/<repo>/'`. For user site https://<username>.github.io use `'/'`.
const base = process.env.GITHUB_PAGES === 'true' ? '/swe-hq/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
