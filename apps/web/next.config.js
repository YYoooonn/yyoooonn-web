const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // transpilePackages: ["@repo/ui"],
  output: "standalone",
  compiler: {
    removeConsole: true,
  },
};

module.exports = withVanillaExtract(nextConfig);
