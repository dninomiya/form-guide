/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/form-guide' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/form-guide' : '',
  trailingSlash: true,
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
