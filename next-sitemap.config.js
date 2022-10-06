const siteUrl = "https://greenkarta.uz";
module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
    
      `${siteUrl}/server-sitemap.xml`,
      `${siteUrl}/server-sitemap-guide.xml`,
    ],
  },
};
