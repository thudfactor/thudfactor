import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import { $ as $$LabeledSwatch, a as $$ColorBar } from './LabeledSwatch_BTeYaICO.mjs';
import { $ as $$Index } from './index_B811OrL0.mjs';
/* empty css                            */
import 'clsx';

const ColorSpacesApple = new Proxy({"src":"/_astro/color-spaces-apple.CD4X5e_t.png","width":488,"height":518,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/12/exploring-rgb/color-spaces-apple.png";
							}
							
							return target[name];
						}
					});

const WebSafeGif = new Proxy({"src":"/_astro/websafe.PAoJcaQB.gif","width":193,"height":196,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/12/exploring-rgb/websafe.gif";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Exploring RGB",
  "date": "2023-12-09T00:00:00.000Z",
  "description": "We begin exploring color in CSS by taking a close look at RGB color.",
  "categories": ["CSS", "Color"],
  "tags": "post",
  "js": ["/js/ColorBar.js"],
  "css": ["/styles/ColorBar.css", "rgb-bars.css"],
  "cover": {
    "src": "./LED_RGB_matrix.jpg",
    "alt": "Closeup of tiny red, green and blue LEDs arranged in a matrix for a display.",
    "description": "These LEDs are arranged very close together in a tight matrix; when viewed from a normal distance, the colors from these lights will blend to reproduce a large portion of the visible spectrum.",
    "attribution": {
      "name": "Komatta / Wikimedia",
      "link": "https://commons.wikimedia.org/wiki/File:LED_RGB_matrix.jpg",
      "license": {
        "name": "Public Domain"
      }
    }
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "color-spaces",
    "text": "Color spaces"
  }, {
    "depth": 2,
    "slug": "color-models",
    "text": "Color models"
  }, {
    "depth": 2,
    "slug": "rgb-in-the-srgb-color-space",
    "text": "RGB in the sRGB color space"
  }, {
    "depth": 2,
    "slug": "advantages-and-disadvantages",
    "text": "Advantages and Disadvantages"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "It’s a revolution for CSS color! Not only do we now have access to many different color models, we also have entirely new color spaces to explore. As part of deepening my own understanding of what’s available to us, I’ve been experimenting a bit. Here’s what I’ve learned."
    }), "\n", createVNode($$Index, {
      position: "right",
      image: ColorSpacesApple,
      alt: "A screenshot of Apple’s monitor color space settings",
      children: createVNode(_components.p, {
        children: "Apple monitors are the exception to those terrible monitor menus; you can access their settings\nfrom the Control Panel."
      })
    }), "\n", createVNode(_components.h2, {
      id: "color-spaces",
      children: "Color spaces"
    }), "\n", createVNode(_components.p, {
      children: ["Color terms get rapidly technical, and — to be honest — I only have a fingernail grip on the definitions to begin with. But for our purposes as web designers or developers, it seems to be correct enough to say that ", createVNode(_components.em, {
        children: "color space"
      }), " represents the whole set of colors available to us."]
    }), "\n", createVNode(_components.p, {
      children: ["Color spaces may be different from a device’s color ", createVNode(_components.em, {
        children: "gamut"
      }), " — or all the colors the device is ", createVNode(_components.em, {
        children: "capable"
      }), " of displaying. In other words, a color space is an abstract or standardized set of colors, and ", createVNode(_components.em, {
        children: "gamut"
      }), " is a result of real-world hardware."]
    }), "\n", createVNode(_components.p, {
      children: ["Example color spaces are: ", createVNode(_components.em, {
        children: "sRGB"
      }), ", ", createVNode(_components.em, {
        children: "Adobe RGB"
      }), ", ", createVNode(_components.em, {
        children: "DCI-P3"
      }), ", and ", createVNode(_components.em, {
        children: "Rec. 2020"
      }), ". If you dig into your monitor’s display settings — those are the ones behind the annoying and difficult-to-use monitor firmware menus — you may discover you can switch between these. So a monitor may be capable of displaying the enormous number of colors described in ", createVNode(_components.em, {
        children: "Rec. 2020"
      }), ", but if it’s set to ", createVNode(_components.em, {
        children: "sRGB"
      }), " mode you’re only going to get a few of those."]
    }), "\n", createVNode(_components.p, {
      children: ["Early computer monitors had limited color gamuts. Due to memory constraints, the color ", createVNode(_components.em, {
        children: "spaces"
      }), " available were often quite small. In the very early days of the web, there were only 216 colors we could use more or less reliably. This was the so-called “web-safe color palette.” But as early as 1996 we were getting into having 16 million colors."]
    }), "\n", createVNode($$Index, {
      position: "right",
      image: WebSafeGif,
      alt: "All 216 colors once considered “web-safe.”",
      children: createVNode(_components.p, {
        children: "If you chose a color outside of these 216, some old monitors would try to approximate them by\n“dithering,” trying to mix the colors by showing pixels of the others very close together. Since\nthese monitors were very low resolution, the results were not ideal."
      })
    }), "\n", createVNode(_components.h2, {
      id: "color-models",
      children: "Color models"
    }), "\n", createVNode(_components.p, {
      children: ["Color ", createVNode(_components.em, {
        children: "models"
      }), ", on the other hand, are the mechanisms used to represent those colors. For example, one color model is the one you may have learned when you were first using finger-paint. “The three primary colors,” it went, “are red, yellow, and blue.” This is not accurate. It is, for example, impossible to get white or black by mixing any amount of red, yellow, and blue paint. Furthermore, the absence of white and black leaves many shades of colors entirely unreachable. But the range of colors reproducible this way is probably fine for five-year-olds."]
    }), "\n", createVNode(_components.p, {
      children: "Over the course of a few posts, I want to take a look at other color models and discuss what I think are their benefits and weaknesses. The first one we’ll look at is RGB — which uses red, green and blue as primary colors."
    }), "\n", createVNode(_components.h2, {
      id: "rgb-in-the-srgb-color-space",
      children: "RGB in the sRGB color space"
    }), "\n", createVNode(_components.p, {
      children: ["Similar to the old “Red, Yellow, Blue” system is the “Red, Blue, Green” system. This color model works well with light. You can get black by reducing ", createVNode(_components.em, {
        children: "all"
      }), " of the light, and you get white by turning red, blue, and green up to their full intensities. Old color CRT displays used tiny red, blue, and green phosphor dots, and modern televisions use the same colors but different technologies."]
    }), "\n", createVNode(_components.p, {
      children: "A lot of articles about color models have illustrations of the models as 3D objects which, while cool, are really hard for me to follow. I think it’s easier to see what’s going on with color bars and swatches, so let’s look at what each of the R, G, and B values look like on their own below."
    }), "\n", createVNode($$Index, {
      position: "right",
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$LabeledSwatch, {
          color: "#ff0000",
          label: "#ff0000 - red"
        }), createVNode($$LabeledSwatch, {
          color: "#00ff00",
          label: "#00ff00 - green"
        }), createVNode($$LabeledSwatch, {
          color: "#0000ff",
          label: "#0000ff - blue"
        })]
      }), createVNode(_components.p, {
        children: "Hexadecimal notation of the three primaries. Although we might think of these as three numbers\njammed together, the result is just one number."
      })]
    }), "\n", createVNode(_components.p, {
      children: "Mixing red, green, and blue to make all of the colors works because we have three types of photoreceptor cones in our eyes tuned to them specifically. All the other colors we see are mixed in our brain from these three different cones."
    }), "\n", createVNode(_components.p, {
      children: ["The sRGB color space — created in 1996 — is the most common and compatible model for colors on the web. If you have used “hex color,” you are working in the RGB color space. In hexadecimal notation, each primary color is represented by a number from 0 to FF, which is 0 to 255 using decimal numbers. We then glue these numbers together, so (reading left to right) the first two digits are red (", createVNode(_components.code, {
        children: "#FF0000"
      }), "), the second two are green (", createVNode(_components.code, {
        children: "#00FF"
      }), "), and the third two are blue (", createVNode(_components.code, {
        children: "#0000FF"
      }), ")."]
    }), "\n", createVNode($$Index, {
      position: "right",
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$LabeledSwatch, {
          color: "#9760f0",
          label: "9,920,752 — grimace purple"
        }), createVNode($$LabeledSwatch, {
          color: "#009060",
          label: "36,960 — forest green"
        }), createVNode($$LabeledSwatch, {
          color: "#f00073",
          label: "15,728,755 — pink"
        })]
      }), createVNode(_components.p, {
        children: "Some RGB colors represented as decimals. Once you start mixing primaries, it’s difficult to\npredict what the resulting color will be."
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Why hexadecimal notation? This format makes it easy for us to see the intensity of red, green, and blue values independently. Decimal is a lot harder to manage. “15,728,755” is a combination of both red and blue, but it’s hard to tease out how much by looking at the decimals. Once it’s in hex, it’s a lot easier to see that it’s quite a lot of red and a bit of blue: ", createVNode(_components.code, {
        children: "#f00073"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "The amount of each of these colors tells us how much of that wavelength of light contributes to the final color value. If we turn off all but one, and then sweep through the values from 0 to 256 for a single color, we get shades of that color."
    }), "\n", createVNode($$Index, {
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb red",
          style: ""
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb green",
          style: ""
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb blue",
          style: ""
        })]
      }), createVNode(_components.p, {
        children: "Each of the three components runs from black to the pure hue as long as the other two components\nare 0."
      })]
    }), "\n", createVNode(_components.p, {
      children: "You can get other hues by blending two of the three primary colors."
    }), "\n", createVNode($$Index, {
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb red",
          style: "--b: 0"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb red",
          style: "--b: 64"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb red",
          style: "--b: 128"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb red",
          style: "--b: 192"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb red",
          style: "--b: 256; margin-bottom: 1rem;"
        }), " ", createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb red",
          style: "--g: 0"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb red",
          style: "--g: 64"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb red",
          style: "--g: 128"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb red",
          style: "--g: 192"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb red",
          style: "--g: 256; margin-bottom: 1rem;"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb blue",
          style: "--g: 0"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb blue",
          style: "--g: 64"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb blue",
          style: "--g: 128"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb blue",
          style: "--g: 192"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb blue",
          style: "--g: 256"
        })]
      }), createVNode(_components.p, {
        children: "Top: 0-100% red across the horizontal axis, 0-100% blue on the vertical axis.\nMiddle: 0-100% red across the horizontal axis, 0-100% green on the vertical axis.\nBottom: 0-100% blue across the horizontal axis, 0-100% green on the vertical axis."
      })]
    }), "\n", createVNode(_components.p, {
      children: "Pure neutral tones have equal amounts red, green, and blue. The closer the red, green, and blue channels are to each other, the more desaturated — or “grey” — the colors get."
    }), "\n", createVNode($$Index, {
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$ColorBar, {
          numSwatches: "32",
          class: "rgb greyscale",
          style: "--g: 0; margin-bottom: 1rem;"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb green",
          style: "--b: 0; --r: 0"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb green",
          style: "--b: 64; --r: 64"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb green",
          style: "--b: 128; --r: 128"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb green",
          style: "--b: 192; --r: 192"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb green",
          style: "--b: 256; --r: 256"
        })]
      }), createVNode(_components.p, {
        children: "Top: Greyscale values created by equal mixtures of red, green, and blue. Bottom: Green from 0-100%\non the X axis, equal values from 0-100% blue and red on the Y axis."
      })]
    }), "\n", createVNode(_components.p, {
      children: "Mix all three unevenly and you get lighter, more pastel-like shades."
    }), "\n", createVNode($$Index, {
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb green",
          style: "--b: 128; --r: 0"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb green",
          style: "--b: 256; --r: 64"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb green",
          style: "--b: 128; --r: 128"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "rgb green",
          style: "--b: 256; --r: 192"
        })]
      }), createVNode(_components.p, {
        children: "Top: Greyscale values created by equal mixtures of red, green, and blue. Bottom: Green from 0-100%\non the X axis, equal values from 0-100% blue and red on the Y axis."
      })]
    }), "\n", createVNode(_components.p, {
      children: "CSS has a few other ways to describe an RGB color."
    }), "\n", createVNode("dl", {
      children: [createVNode("dt", {
        children: createVNode("code", {
          children: "rgb(0, 128, 255)"
        })
      }), createVNode("dd", {
        children: "As a comma-separated list of red, green, and blue decimal values between 0 and 255"
      }), createVNode("dt", {
        children: createVNode("code", {
          children: "rgba(0, 128, 255, 0.1)"
        })
      }), createVNode("dd", {
        children: createVNode(_components.p, {
          children: "The same, but with a fourth component in decimal values between 0 and 1 describing how opaque\n(1) or translucent (0) the color is."
        })
      }), createVNode("dt", {
        children: createVNode("code", {
          children: "rgb(0 128 255 / 0.1)"
        })
      }), createVNode("dd", {
        children: createVNode(_components.p, {
          children: "A space-separated version with an optional opacity value separated from the color channels by a\nslash."
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "The last syntax style is the most recent, but it’s been available on all modern browsers for a long time now."
    }), "\n", createVNode(_components.h2, {
      id: "advantages-and-disadvantages",
      children: "Advantages and Disadvantages"
    }), "\n", createVNode(_components.p, {
      children: "As a color model, RGB has some big advantages:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "It matches the mechanical production of color on displays, which emit red, green, and blue light, just smooshed close together."
      }), "\n", createVNode(_components.li, {
        children: "Every color in the sRGB space can be addressed by precisely one combination of R, G, and B."
      }), "\n", createVNode(_components.li, {
        children: "This mode of expressing colors in digital design is as common as dirt."
      }), "\n"]
    }), "\n", createVNode($$Index, {
      position: "right",
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$LabeledSwatch, {
          color: "#ff0000",
          label: "#ff0000"
        }), createVNode($$LabeledSwatch, {
          color: "#f44e4e",
          label: "#f44e4e"
        }), createVNode($$LabeledSwatch, {
          color: "#a73106",
          label: "#a73106"
        })]
      }), createVNode(_components.p, {
        children: "Very similar colors can have radically different RGB values."
      })]
    }), "\n", createVNode(_components.p, {
      children: "But there’s one huge disadvantage: Because RGB is a mixture of three colors, it can be very difficult to figure out on your own what values you need to change to make colors lighter or darker, or more or less saturated."
    }), "\n", createVNode(_components.p, {
      children: "This is not a problem if you are able to pick individual colors from a color wheel, but if you want to derive colors mathematically — “the brand color, but 20% lighter” — you need to use a different color model."
    }), "\n", createVNode(_components.p, {
      children: "The next color model was designed to solve that problem, but to do that we have to take ourselves out of the relatively familiar ground of mixing colors and learn to think about color in a different way."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/posts/2023/12/exploring-rgb/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/12/exploring-rgb/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/12/exploring-rgb/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
