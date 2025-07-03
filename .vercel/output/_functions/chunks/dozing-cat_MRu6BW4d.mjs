const dozingCat = new Proxy({"src":"/_astro/dozing-cat.CIIYdl-8.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/02/the-last-kindle/dozing-cat.jpg";
							}
							
							return target[name];
						}
					});

export { dozingCat as default };
