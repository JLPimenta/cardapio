/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'soaresemcasa.com.br',
      },
      {
        hostname: 'emporiokaminski.com.br',
      },
      {
        hostname: 'www.receiteria.com.br',
      },
    ],
  },
}

module.exports = nextConfig
