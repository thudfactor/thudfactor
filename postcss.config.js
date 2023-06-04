const config = {
  plugins: [
    require('postcss-import')({
      path: './blog/_includes/css',
    }),
    require('postcss-nesting'),
  ]
}

module.exports = config;