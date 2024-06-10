import path from "path";

const withSvg = (config, svgoConfig) => {
  const fileLoaderRule = config.module.rules.find(rule =>
    rule.test?.test?.(".svg")
  );
  config.module.rules.push(
    // Reapply the existing rule, but only for svg imports ending in ?url
    {
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/, // *.svg?url
      exclude: /\.svg$/i,
    },
    // Convert all other *.svg imports to React components
    {
      test: /\.svg$/i,
      issuer: fileLoaderRule.issuer,
      resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
      use: [
        {
          loader: "@svgr/webpack",
          options: { svgo: true, svgoConfig },
        },
      ],
    }
  );

  return config;
};

const svgoConfig = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeTitle: false,
          removeViewBox: false,
        },
      },
    },
  ],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => withSvg(config, svgoConfig),
  sassOptions: {
    includePaths: ["./src/"],
  },
};

export default nextConfig;
