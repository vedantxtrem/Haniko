/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hanio.peerduck.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'g-6r95onc1ynb.vusercontent.net',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
