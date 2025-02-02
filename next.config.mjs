/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.d\.ts$/,
      loader: 'ignore-loader', // Ignore .d.ts files during build
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**', // Allow all paths from the Sanity image CDN
      },
    ],
  },
};

export default nextConfig;