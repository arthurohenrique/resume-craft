/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: '/resume-craft',
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  
  outputFileTracing: false, // Desativa a inclusão automática de arquivos de dependência no build
  compress: true, // Ativa a compressão Gzip/Brotli
  eslint: {
    ignoreDuringBuilds: true // Ignora erros de ESLint no build
  },
  typescript: {
    ignoreBuildErrors: true // Ignora erros de TypeScript no build
  },
  experimental: {
    outputStandalone: true // Gera uma build mais enxuta, excluindo arquivos desnecessários
  }
};

export default nextConfig;
