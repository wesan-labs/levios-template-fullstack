const checkEnvVariables = require("./check-env-variables")

checkEnvVariables()

/**
 * Image hostnames / optional S3 env for custom uploads
 */
const S3_HOSTNAME = process.env.LEVIOS_CLOUD_S3_HOSTNAME || process.env.MEDUSA_CLOUD_S3_HOSTNAME
const S3_PATHNAME = process.env.LEVIOS_CLOUD_S3_PATHNAME || process.env.MEDUSA_CLOUD_S3_PATHNAME

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "levios-public-images.s3.eu-west-1.amazonaws.com", // demo product images
      },
      {
        protocol: "https",
        hostname: "levios-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "levios-server-testing.s3.us-east-1.amazonaws.com",
      },
      ...(S3_HOSTNAME && S3_PATHNAME
        ? [
            {
              protocol: "https",
              hostname: S3_HOSTNAME,
              pathname: S3_PATHNAME,
            },
          ]
        : []),
    ],
  },
}

module.exports = nextConfig
