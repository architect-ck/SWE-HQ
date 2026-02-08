import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: base '/' for chandrakant.github.io; '/SWE-HQ/' for architect-ck.github.io/SWE-HQ
const base = process.env.GITHUB_PAGES === 'true' ? '/SWE-HQ/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
