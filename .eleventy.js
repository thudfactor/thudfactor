const eleventySass = require("eleventy-sass");
const pluginRev = require("eleventy-plugin-rev");
const path = require("path");
const Image = require("@11ty/eleventy-img");
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

const dir = {
  input: "src",
  output: "dist",
  layouts: "_layouts"
};

function pageInfo() {
  return '<h1>foo</h1>';
};

async function imageShortcode(page, src, alt, width = "1024") {
  const { inputPath } = page;
  const filePath = path.dirname(inputPath);

  const computedSrc = `${filePath}/${src}`;

  const metadata = await Image(computedSrc, {
    formats: "webp",
    widths: [width],
    outputDir: "./dist/images",
    urlPath: "/images/"
  });

  const imageAttributes = {
    alt,
    sizes: '',
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPlugin(pluginRev);
  eleventyConfig.addPlugin(eleventySass, {
    rev: true
  });
  eleventyConfig.addPlugin(UpgradeHelper);
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addShortcode("pageInfo", pageInfo);
  return { dir };
};