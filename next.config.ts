import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/amortization/:path*',
        destination: '/amortization/:path*',
      },
      {
        source: '/properties/:path*',
        destination: '/properties/:path*',
      },
    ];
  },
};

export default nextConfig;
