const eleventySass = require("eleventy-sass");
const pluginRev = require("eleventy-plugin-rev");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPlugin(pluginRev);
  eleventyConfig.addPlugin(eleventySass, {
    rev: true
  });
  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts"
    }
  }
};