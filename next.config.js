module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',
                pathname: '/account123/**',
            },
        ],
    },
}