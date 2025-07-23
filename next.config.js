/** @type {import('next').NextConfig} */
const nextConfig = {
  // Opción 1: Si usas export estático (HTML)
  output: 'export', // Descomenta esto si quieres un sitio 100% estático
  
  images: {
    unoptimized: true, // <== ESTA LÍNEA SOLUCIONA EL ERROR DE OPTIMIZACIÓN
  },
  // Opción 2: Si necesitas SSR (dinámico), usa rewrites:
  async rewrites() {
    return [
      {
        source: '/amortization/:path*',
        destination: '/amortization/:path*', // Sirve desde la raíz
      },
    ];
  },
};

module.exports = nextConfig;