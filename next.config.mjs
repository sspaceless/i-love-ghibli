/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "image.tmdb.org" },
      { hostname: "www.themoviedb.org" },
    ],
  },
  output: "standalone",
};

export default nextConfig;
