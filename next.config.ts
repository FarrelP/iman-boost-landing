import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'iman-boost_landing';

const nextConfig: NextConfig = {
  images: {
    domains: ['placehold.co'],
  },
  /* config options here */
};

export default nextConfig;
