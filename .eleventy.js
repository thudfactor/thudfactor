const pluginRss = require("@11ty/eleventy-plugin-rss");
//const pluginPostCSS = require("eleventy-plugin-postcss");
//const inclusive = require("@11ty/eleventy-plugin-inclusive-language");
const { getCategories } = require("./config/collections");
const { extractExcerpt, alertCallout } = require("./config/shortcodes");
const { image, coverImage, facebookImagePath, articleFig } = require("./config/shortcodes/images");
const { filterByCategory, nicedate } = require("./config/filters");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
//const markdownItFootnote = require("markdown-it-footnote");

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(pluginRss);
  //eleventyConfig.addPlugin(pluginPostCSS);
  //eleventyConfig.addPlugin(inclusive);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addCollection('categories', getCategories);

  eleventyConfig.addShortcode('excerpt', extractExcerpt);
  eleventyConfig.addShortcode('image', image);
  eleventyConfig.addShortcode('coverImage', coverImage);
  eleventyConfig.addShortcode('facebookImagePath', facebookImagePath);

  eleventyConfig.addPairedShortcode('articleFig', articleFig);
  eleventyConfig.addPairedShortcode('alertCallout', alertCallout);

  eleventyConfig.addFilter("filterByCategory", filterByCategory);
  eleventyConfig.addFilter('nicedate', nicedate);

  eleventyConfig.addPassthroughCopy('src/img/*');
  eleventyConfig.addPassthroughCopy('src/video/*');
  eleventyConfig.addPassthroughCopy('src/favicon/*');
  eleventyConfig.addPassthroughCopy('src/_headers');

  eleventyConfig.addPassthroughCopy('src/js/*');
  eleventyConfig.addWatchTarget("src/js/*");
  eleventyConfig.addPassthroughCopy('src/posts/**/*.js');
  eleventyConfig.addWatchTarget("src/posts/**/*.js");
  eleventyConfig.addPassthroughCopy('src/**/*.css');
  eleventyConfig.addWatchTarget("src/**/*.css");

  //eleventyConfig.addPassthroughCopy('src/*.xsl');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    }
  }
};