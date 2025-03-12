/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/attendance',
        destination: 'https://airtable.com/app28ABXN7BKl5b0o/paguL7pjHxfsEPlTD',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
