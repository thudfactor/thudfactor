const suggestion = new Proxy({"src":"/_astro/suggestion.DP5VlbEs.png","width":2138,"height":394,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/06/copilot/suggestion.png";
							}
							
							return target[name];
						}
					});

export { suggestion as default };
