const borked = new Proxy({"src":"/_astro/borked.1Q-OXAXi.png","width":875,"height":854,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/06/browser-testing/borked.png";
							}
							
							return target[name];
						}
					});

export { borked as default };
