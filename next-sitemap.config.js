const siteUrl = "https://greenkarta.uz";
module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
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
