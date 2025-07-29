import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'iman-boost-landing';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
  },
};

export default nextConfig;
