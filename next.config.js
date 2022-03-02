/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_BASE: 'https://hn.algolia.com/api/v1/'
  },
  compress: true
}

module.exports = nextConfig
