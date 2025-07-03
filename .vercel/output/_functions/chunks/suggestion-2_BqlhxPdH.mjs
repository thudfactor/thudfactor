const suggestion2 = new Proxy({"src":"/_astro/suggestion-2.Cqr4aHPd.png","width":2020,"height":286,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/06/copilot/suggestion-2.png";
							}
							
							return target[name];
						}
					});

export { suggestion2 as default };
