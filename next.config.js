const withPlugins = require('next-compose-plugins');

const proxy = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/api/:path*`,
      },
    ];
  },
};

const nextConfig = {
  ...proxy,
  images: {
    domains: [],
  },
};

module.exports = withPlugins([], nextConfig);
