// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/vitrine",
  reactStrictMode: true,
  output: "export", // enables static exports
  images: {
    unoptimized: true, // disables server-based image optimization.
  }
}
 
module.exports = nextConfig