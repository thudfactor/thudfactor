const concreteJungle = new Proxy({"src":"/_astro/concrete-jungle.CT7OuM47.jpg","width":3264,"height":2448,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/10/colocation/concrete-jungle.jpg";
							}
							
							return target[name];
						}
					});

export { concreteJungle as default };
