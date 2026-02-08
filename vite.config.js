import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: chandrakant.github.io (user/org site) uses base '/'.
// For a project site like username.github.io/repo use base '/repo/'.
const base = '/'

export default defineConfig({
  plugins: [react()],
  base,
})
