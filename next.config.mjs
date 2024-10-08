/** @type {import('next').NextConfig} */
const nextConfig = {
   
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'hanio.peerduck.com',
              port: '',
              pathname: '*',
            },
          ],
        },
      
};

export default nextConfig;
