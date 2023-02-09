/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    APP_URL: process.env.APP_URL
  }
}

module.exports = nextConfig
