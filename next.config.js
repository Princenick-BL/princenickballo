/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // put the rest of config here

  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'localhost', 'api-nickscorp-app.herokuapp.com']
  },
  experimental: { images: { layoutRaw: true } },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config;
  },
})

// module.exports = nextConfig
