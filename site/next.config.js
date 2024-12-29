/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'wwong',
    description: 'Some containers yo.',
    icon: 'https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg',
    listUrl: 'https://blog.wwong.me/kasm_workspaces_registry/',
    contactUrl: 'https://github.com/wilsonwong1990',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
