/** @type {import('next').NextConfig} */
const path = require("path");
require("dotenv").config(); // This loads variables from the .env file

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    API_URL_KEY: process.env.API_URL_KEY,
    API_URL_HOST: process.env.API_URL_HOST,
  },
};

module.exports = nextConfig;
