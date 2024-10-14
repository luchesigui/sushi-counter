module.exports = {
  // OBRIGATÓRIO: adicione o seu domínio aqui
  siteUrl: process.env.SITE_URL || "https://seudominio.com",
  generateRobotsTxt: true,
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
};
