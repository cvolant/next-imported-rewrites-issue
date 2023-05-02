
const rewritesList = require("./rewrites");

const nextConfig = {
  i18n: {
    locales: ["default", "en", "pt", "de"],
    defaultLocale: "default",
    localeDetection: false,
  },
  async rewrites() {
    return [

      {
        source: '/foo',
        destination: '/',
      },

      // Creating a copy of the object works
      // ...rewritesList.map(e => ({ ...e })),
    ]
  },
}

module.exports = nextConfig
