/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'news.gurnalaw.ca',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/immigration-lawyer',
        destination: '/immigration-lawyer-in-surrey',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
