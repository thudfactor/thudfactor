const getCategories = collection => {
  const categories = new Set();
  const posts = collection.getFilteredByTag('post');
  posts.forEach(p => {
    const cats = p.data.categories;
    cats.forEach(cat => categories.add(cat));
  });
  return Array.from(categories);
}

module.exports = {
  getCategories,
}