/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
    SEARCH_URL: process.env.SEARCH_URL,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL
  },
  images: {
    domains: ['www.themoviedb.org']
  }
}

module.exports = nextConfig
