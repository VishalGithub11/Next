/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //suppose a user go to old blog whose url is like '/old_blog/path' and now you want to user who goes on this url, redirect to some new url '/new_blog/path' use redirects below:-------
  // redirects: async()=>{
  //   return [
  //     {
  //       source: '/onlyFooter',
  //       destination: '/',
  //       permanent:true //status code 308, 307 for false
  //     }
  //   ]
  // }
}

module.exports = nextConfig
