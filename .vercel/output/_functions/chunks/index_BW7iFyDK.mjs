async function getMod() {
						return import('./index_sBoni0AP.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = ["[data-element=\"color-bar\"] {\n\tdisplay: flex;\n\tjustify-content: stretch;\n\theight: var(--color-bar-height, 5rem);\n\n\t> * {\n\t\twidth: 100%;\n\t}\n}\n","[data-element=\"labeledSwatch\"] {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tfont-size: 12px;\n\n\t.swatch {\n\t\twidth: 50px;\n\t\tflex-shrink: 0;\n\t\taspect-ratio: 3/2;\n\t\tbackground-color: var(--color, #ccc);\n\t}\n\n\t.label {\n\t\tfont-family: monospace;\n\t}\n}\n","color-bar {\n\tdisplay: flex;\n\tjustify-content: stretch;\n\theight: var(--color-bar-height, 5rem);\n\n\t> * {\n\t\twidth: 100%;\n\t}\n}\n\n.rgb {\n\t--r: 0;\n\t--g: 0;\n\t--b: 0;\n\n\t.swatch {\n\t\tbackground-color: rgb(var(--r) var(--g) var(--b));\n\t}\n\n\t&.red .swatch {\n\t\t--r: calc(256 / var(--numswatches) * var(--index));\n\t}\n\n\t&.green .swatch {\n\t\t--g: calc(256 / var(--numswatches) * var(--index));\n\t}\n\n\t&.blue .swatch {\n\t\t--b: calc(256 / var(--numswatches) * var(--index));\n\t}\n\n\t&.greyscale .swatch {\n\t\t--r: calc(256 / var(--numswatches) * var(--index));\n\t\t--g: calc(256 / var(--numswatches) * var(--index));\n\t\t--b: calc(256 / var(--numswatches) * var(--index));\n\t}\n}\n"];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
