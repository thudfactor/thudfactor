const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginPostCSS = require("eleventy-plugin-postcss");
const { getCategories } = require("./config/collections");
const { extractExcerpt } = require("./config/shortcodes");
const { image } = require("./config/shortcodes/images");
const { filterByCategory, nicedate } = require("./config/filters");

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginPostCSS);

  eleventyConfig.addCollection('categories', getCategories);

  eleventyConfig.addShortcode('excerpt', extractExcerpt);
  eleventyConfig.addShortcode('image', image);

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