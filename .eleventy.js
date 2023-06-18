const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginPostCSS = require("eleventy-plugin-postcss");
const inclusive = require("@11ty/eleventy-plugin-inclusive-language");
const { getCategories } = require("./config/collections");
const { extractExcerpt, alertCallout } = require("./config/shortcodes");
const { image, coverImage } = require("./config/shortcodes/images");
const { filterByCategory, nicedate } = require("./config/filters");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginPostCSS);
  eleventyConfig.addPlugin(inclusive);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addCollection('categories', getCategories);

  eleventyConfig.addShortcode('excerpt', extractExcerpt);
  eleventyConfig.addShortcode('image', image);
  eleventyConfig.addShortcode('coverImage', coverImage);

  eleventyConfig.addPairedShortcode('alertCallout', alertCallout);

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