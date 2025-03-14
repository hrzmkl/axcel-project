import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'build',
  experimental: {
    appDir: true,
  },
}
 
export default nextConfig