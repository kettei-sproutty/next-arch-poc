const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  sw: 'service-worker.gen.js',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ['ui'],
    appDir: true,
  },
}

module.exports = withPWA(nextConfig)
