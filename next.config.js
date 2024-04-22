/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            // hostname: 'demoliveadmin.adibuja.com',//for demo live
            hostname: 'devadmin.adibuja.com',//for dev 
            // hostname: 'stagingadmin.adibuja.com',//for stagingadmin
            // hostname: 'uatadmin.adibuja.com',//for uatadmin
            // hostname: 'cdn.adibuja.com',//for live
            port: '',
            pathname: '/media/Images/**',//for demo live and for dev
            // pathname: '/Images/**',//for live
          },
        ],
      },
      compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
      }
}
// module.exports = {
//   compress: false,
// }
module.exports = nextConfig
