const config = {
  plugins: [
    require('postcss-import')({
      path: './src/_includes/css',
    }),
    require('postcss-nesting'),
  ]
}

module.exports = config;