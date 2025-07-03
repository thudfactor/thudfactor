const crampedSpace = new Proxy({"src":"/_astro/cramped-space.B-SBUJiN.jpg","width":4032,"height":3024,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/10/colocation/cramped-space.jpg";
							}
							
							return target[name];
						}
					});

export { crampedSpace as default };
