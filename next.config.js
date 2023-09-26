/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/form-guide',
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
