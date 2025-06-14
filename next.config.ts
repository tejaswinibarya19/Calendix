// import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig= {
  env: {
    NYLAS_CLIENT_ID: process.env.NYLAS_CLIENT_ID,
    NYLAS_API_KEY: process.env.NYLAS_API_KEY,
    NYLAS_API_URI: process.env.NYLAS_API_URI,
  },
};
module.exports = nextConfig;
