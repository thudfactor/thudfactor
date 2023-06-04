const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginPostCSS = require("eleventy-plugin-postcss");

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginPostCSS);

  eleventyConfig.addShortcode('excerpt', article => extractExcerpt(article));

  eleventyConfig.addCollection('categories', collectionApi => {
    const categories = new Set();
    const posts = collectionApi.getFilteredByTag('post');
    posts.forEach(p => {
      const cats = p.data.categories;
      cats.forEach(cat => categories.add(cat));
    });
    return Array.from(categories);
  });

  eleventyConfig.addFilter("filterByCategory", (posts, cat) => {
    cat = cat.toLowerCase();
    const result = posts.filter(p => {
      const cats = p.data.categories.map(s => s.toLowerCase());
      return cats.includes(cat);
    });
    return result;
  });

  const english = new Intl.DateTimeFormat('en-US');
  eleventyConfig.addFilter('nicedate', date => english.format(date));

  function extractExcerpt(post) {
    if (!post.templateContent) return '';
    if (post.templateContent.indexOf('</p>') > 0) {
      let end = post.templateContent.indexOf('</p>');
      return post.templateContent.substr(0, end + 4);
    }
    return post.templateContent;
  }

  eleventyConfig.addPassthroughCopy('blog/images/*');

  return {
    dir: {
      input: 'blog'
    }
  }
};