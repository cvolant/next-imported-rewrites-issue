
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
      // Do not work
      ...rewritesList,

      // Adding the object here it works.
      // {
      //   source: '/foo',
      //   destination: '/',
      // },

      // Creating a copy of the object works
      // ...rewritesList.map(e => ({ ...e })),
    ]
  },
}

module.exports = nextConfig
