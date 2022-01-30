const withPWA = require("next-pwa");

const withPlugins = require("next-compose-plugins");

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  webpack5: true,
};

module.exports = withPlugins(
  [
    withPWA,
    {
      pwa: {
        dest: "public",
      },
    },
  ],
  nextConfig
);
