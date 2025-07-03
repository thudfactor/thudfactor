const iCollectArt = new Proxy({"src":"/_astro/i-collect-art.DR6ZC2um.jpg","width":720,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/02/the-last-kindle/i-collect-art.jpg";
							}
							
							return target[name];
						}
					});

export { iCollectArt as default };
