module.exports = {
  async rewrites() {
    return [
      {
        source: '/amortization/:path*',
        destination: '/amortization/static/:path*'
      },
      {
        source: '/amortization', // Ruta sin slash
        destination: '/amortization/index.html'
      }
    ];
  }
};