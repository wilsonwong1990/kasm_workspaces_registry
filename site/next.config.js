/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'wwong',
    description: 'Some containers yo.',
    icon: '/img/logo.svg',
    listUrl: 'https://wilsonwong1990.github.io/kasm_workspaces_registry/',
    contactUrl: 'https://github.com/wilsonwong1990',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
