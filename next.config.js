module.exports = {
  target: 'serverless',
  minify: true,
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
};
