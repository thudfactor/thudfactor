  function extractExcerpt(post) {
    if (!post.templateContent) return '';
    if (post.templateContent.indexOf('</p>') > 0) {
      let end = post.templateContent.indexOf('</p>');
      return post.templateContent.substr(0, end + 4);
    }
    return post.templateContent;
  }

  function alertCallout(content, variant = 'info') {
    return `<div class="alert-callout ${variant}">\n${content}\n</div>`;
  }

  module.exports = {
    extractExcerpt, alertCallout
  }