
const rewritesList = require("./rewrites");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["default", "en", "pt", "de"],
    defaultLocale: "default",
    localeDetection: false,
  },
  async rewrites() {
    return [
      ...rewritesList,
      // Adding the object here it works.
      // {
      //   source: '/foo',
      //   destination: '/',
      // },
    ]
  },
}

module.exports = nextConfig
