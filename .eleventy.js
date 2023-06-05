const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginPostCSS = require("eleventy-plugin-postcss");
const { getCategories } = require("./config/collections.js");
const { extractExcerpt } = require("./config/shortcodes.js");
const { filterByCategory, nicedate } = require("./config/filters.js");

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginPostCSS);

  eleventyConfig.addCollection('categories', getCategories);

  eleventyConfig.addShortcode('excerpt', extractExcerpt);

  eleventyConfig.addFilter("filterByCategory", filterByCategory);
  eleventyConfig.addFilter('nicedate', nicedate);

  eleventyConfig.addPassthroughCopy('blog/images/*');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    }
  }
};