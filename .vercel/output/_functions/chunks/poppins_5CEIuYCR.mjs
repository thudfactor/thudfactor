const poppins = new Proxy({"src":"/_astro/poppins.mV7eMYu3.jpg","width":584,"height":584,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/06/new-hotness/poppins.jpg";
							}
							
							return target[name];
						}
					});

export { poppins as default };
