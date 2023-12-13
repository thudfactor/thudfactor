function filterByCategory(posts, cat) {
    cat = cat.toLowerCase();
    const result = posts.filter(p => {
      const cats = p.data.categories.map(s => s.toLowerCase());
      return cats.includes(cat);
    });
    return result;
  }

function nicedate(date) {
  const english = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  return english.format(date);
}

module.exports = {
  filterByCategory,
  nicedate
}