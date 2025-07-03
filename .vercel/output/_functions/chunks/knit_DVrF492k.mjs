const knit = new Proxy({"src":"/_astro/knit.BWkrMSQM.jpg","width":1280,"height":961,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/03/ai-checkin/knit.jpg";
							}
							
							return target[name];
						}
					});

export { knit as default };
