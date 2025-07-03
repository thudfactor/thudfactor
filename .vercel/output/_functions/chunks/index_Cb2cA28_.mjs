import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import { $ as $$Index } from './index_B2d5c0sX.mjs';
import { $ as $$LabeledSwatch, a as $$ColorBar } from './LabeledSwatch_BTeYaICO.mjs';
import { $ as $$AlertCallout } from './AlertCallout_BPXWUukm.mjs';
/* empty css                            */
import 'clsx';

const frontmatter = {
  "title": "Exploring HSL",
  "date": "2023-12-11T00:00:00.000Z",
  "description": "We continue exploring color in CSS by taking a close look at HSL.",
  "categories": ["CSS", "Color"],
  "tags": "post",
  "js": ["/js/ColorBar.js"],
  "css": ["/styles/ColorBar.css", "hsl-bars.css"],
  "cover": {
    "src": "./saturation-example.png",
    "alt": "A picture of a flower doctored so that the leaves and blossom are brilliant green and purple on the left, but fade into shades of grey on the right.",
    "description": "“Saturation” is a measure of how much hue contributes to a color. Here is a picture of a Guzmania Bromeliad (I think) with saturation decreasing from left to right.",
    "attribution": {
      "name": "John Williams"
    }
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "adjusting-one-axis",
    "text": "Adjusting one axis"
  }, {
    "depth": 2,
    "slug": "advantages-and-disadvantages",
    "text": "Advantages and Disadvantages"
  }, {
    "depth": 2,
    "slug": "similar-variations",
    "text": "Similar variations"
  }, {
    "depth": 2,
    "slug": "which-is-better-rgb-or-hsl",
    "text": "Which is better, RGB or HSL?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["The next most common color model in CSS is ", createVNode(_components.em, {
        children: "HSL"
      }), ". Unlike the RGB color model, HSL doesn’t define color as a mixture of three primaries. It describes color as being made up of three different qualities."]
    }), "\n", createVNode(_components.p, {
      children: ["The first, ", createVNode(_components.em, {
        children: "hue"
      }), ", sets the overall color from the spectrum. ", createVNode(_components.em, {
        children: "Saturation"
      }), " is how much that hue contributes to the overall color. ", createVNode(_components.em, {
        children: "Lightness"
      }), " is how light or dark the color is."]
    }), "\n", createVNode($$Index, {
      position: "right",
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$LabeledSwatch, {
          color: "#c414b3",
          label: "#c414b3"
        }), createVNode($$LabeledSwatch, {
          color: "rgb(196 20 179)",
          label: "rgb(196 20 179)"
        }), createVNode($$LabeledSwatch, {
          color: "hsl(306deg, 81%, 42%)",
          label: "hsl(306deg 81% 42%)"
        })]
      }), createVNode(_components.p, {
        children: ["Specifying the same color three different ways: RGB hex notation, the ", createVNode(_components.code, {
          children: "rgb()"
        }), " function, and the\n", createVNode(_components.code, {
          children: "hsl()"
        }), " function."]
      })]
    }), "\n", createVNode(_components.p, {
      children: "In CSS, both the HSL and the RGB color models work within the sRGB color space. All colors specified using RGB can also be specified using HSL, so you can pick the one you are more comfortable with. But many people find working with HSL values more intuitive."
    }), "\n", createVNode(_components.h2, {
      id: "adjusting-one-axis",
      children: "Adjusting one axis"
    }), "\n", createVNode(_components.p, {
      children: "Just as we did with RGB, let’s look at each axis in isolation. (Or, at least, as much isolation as we can manage.)"
    }), "\n", createVNode($$Index, {
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$ColorBar, {
          numSwatches: "18",
          class: "hsl hue",
          style: "margin-bottom: 1rem;"
        }), createVNode($$ColorBar, {
          numSwatches: "20",
          class: "hsl saturation",
          style: "margin-bottom: 1rem;"
        }), createVNode($$ColorBar, {
          numSwatches: "20",
          class: "hsl lightness",
          style: "margin-bottom: 1rem;"
        })]
      }), createVNode(_components.p, {
        children: ["Top: Changing the ", createVNode(_components.em, {
          children: "hue"
        }), " value from 0º to 360º. Middle: Changing the ", createVNode(_components.em, {
          children: "saturation"
        }), " value from 0% to\n100%, with lightness 50%. Bottom: changing the ", createVNode(_components.em, {
          children: "lightness"
        }), " value from 0% to 100%, saturation 100%."]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Hue is specified as an angle on a color wheel, so values range from 0º to 360º, with decimal values available. Just as with other circles, angles equal to or greater than 360º just take another turn around the wheel — 0º and 360º are the same hue (red), 60º and 420º are both the same yellow, and so forth."
    }), "\n", createVNode(_components.p, {
      children: "Saturation and lightness are both specified as percentages. Adjusting saturation alone causes colors to tend towards grey, which sometimes appears to lighten the colors even though the lightness value is untouched. At 0% saturation, all colors are the same because the hue value contributes nothing to the overall color. Only saturation and lightness matter."
    }), "\n", createVNode($$Index, {
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl hue",
          style: "--s: 100%"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl hue",
          style: "--s: 75%"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl hue",
          style: "--s: 50%"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl hue",
          style: "--s: 25%"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl hue",
          style: "--s: 0%"
        })]
      }), createVNode(_components.p, {
        children: "Reducing saturation in 25% increments from 100% to 0%, lightness kept constant at 50%."
      })]
    }), "\n", createVNode(_components.p, {
      children: "Adjusting lightness can also seem to pull the hue out of the color because the hue is overwhelmed by black and white, but you can’t get anything approaching a neutral grey that way."
    }), "\n", createVNode($$Index, {
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl hue",
          style: "--l: 0%"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl hue",
          style: "--l: 20%"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl hue",
          style: "--l: 40%"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl hue",
          style: "--l: 60%"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl hue",
          style: "--l: 80%"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl hue",
          style: "--l: 100%"
        })]
      }), createVNode(_components.p, {
        children: "Increasing lightness in 20% increments from 0% to 100%, saturation kept constant at 50%."
      })]
    }), "\n", createVNode(_components.p, {
      children: "To get those neutral tones, you can set the hue to any degree, reduce saturation to 0, and and then change the lightness."
    }), "\n", createVNode($$Index, {
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl lightness",
          style: "--s: 0%"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hsl hue",
          style: "--l: 25%"
        })]
      }), createVNode(_components.p, {
        children: "Every block in both bars has a different hue, but they are all shades of grey in the top bar\nbecause saturation is 0%."
      })]
    }), "\n", createVNode(_components.p, {
      children: "The difference between lightness and saturation is a bit hard to grasp, but think about changing colors in a photograph. Removing saturation from a color photo will make it look black and white. But increasing or decreasing lightness makes a color photo more darker or brighter. You will start to lose details in the shadows (which get darker) or highlights (which get blown out) until everything disappears into black or white."
    }), "\n", createVNode(_components.h2, {
      id: "advantages-and-disadvantages",
      children: "Advantages and Disadvantages"
    }), "\n", createVNode($$Index, {
      position: "right",
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$LabeledSwatch, {
          color: "hsl(127deg 100% 50%)",
          label: "hsl(127deg 100% 50%)"
        }), createVNode($$LabeledSwatch, {
          color: "hsl(127deg 10% 50%)",
          label: "hsl(127deg 10% 50%)"
        }), createVNode($$LabeledSwatch, {
          color: "hsl(127deg, 56%, 37%)",
          label: "hsl(127deg 56% 37%)"
        })]
      }), createVNode(_components.p, {
        children: "All three color swatches above use the same hue value. Top: A very vivid green. Middle: A very\nfaded green. Bottom: A rather spring-like green."
      })]
    }), "\n", createVNode(_components.p, {
      children: "Once you have a good feel for where hues are located on the color wheel, it’s easy to pick a color and get it into the general ballpark. It does take some practice, but in my experience you have a wider range of colors you can get to without having to reach for a color picker."
    }), "\n", createVNode(_components.p, {
      children: "HSL also mimics a common way we think about colors. If you think “that red is too vivid,” you can pull saturation down. But if you want “dark red” or “light red” you can adjust lightness. This also means it’s better suited to cases where colors have to change programmatically."
    }), "\n", createVNode($$Index, {
      position: "right",
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$LabeledSwatch, {
          color: "hsl(270deg 100% 100%)",
          label: "hsl(270deg 100% 100%)"
        }), createVNode($$LabeledSwatch, {
          color: "hsl(60deg 75% 100%)",
          label: "hsl(60deg 75% 100%)"
        }), createVNode($$LabeledSwatch, {
          color: "hsl(43.23deg 0% 100%)",
          label: "hsl(43.23deg 0% 100%)"
        })]
      }), createVNode(_components.p, {
        children: "Although these swatches all describe colors at different points on the hue wheel and with\ndifferent amounts of saturation, they are all white."
      })]
    }), "\n", createVNode(_components.p, {
      children: "There are a couple of flaws with HSL, however. Because all three color components are always required, there are a few places where just one or two matter. At 100% or 0% lightness, it does not matter what either the saturation or the hue are. Those “theoretical” colors just get clipped to white and black."
    }), "\n", createVNode(_components.p, {
      children: "There’s also a human-assumption issue, since we tend to like to think in whole numbers. With RGB you can get 256 levels of grey without reaching for fractions — You just increase all three colors in lock-step from 0 to 255 (#00 to #FF). With HSL percentages, though, you have 101 whole number values — 0% to 100%."
    }), "\n", createVNode(_components.p, {
      children: ["You can see this tendency in many online color pickers or color picker apps. Although decimal values for lightness and saturation are valid, ", createVNode(_components.a, {
        href: "https://hslpicker.com/#f0f0f0",
        children: "A Most Excellent HSL Color Picker"
      }), " presents an error message. That means two to three levels of RGB grey are unreachable — not by HSL itself, but through the color picker. You could argue that the visual difference between ", createVNode(_components.code, {
        children: "#ececec"
      }), ", ", createVNode(_components.code, {
        children: "#ededed"
      }), ", and ", createVNode(_components.code, {
        children: "#eeeeee"
      }), " is indistinguishable, but no doubt it matters to someone."]
    }), "\n", createVNode(_components.p, {
      children: ["The biggest disadvantage, however, is that colors of the same lightness ", createVNode(_components.em, {
        children: "value"
      }), " are perceived as lighter or darker than their neighbors. Let’s take a look at the HSL spectrum again:"]
    }), "\n", createVNode($$Index, {
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: createVNode($$ColorBar, {
          numSwatches: "18",
          class: "hsl hue",
          style: "--s: 100%"
        })
      }), createVNode(_components.p, {
        children: "The HSL color spectrum, with saturation at 100% and lightness at 50%. Although lightness is\nconsistent, some of these colors look brighter than others."
      })]
    }), "\n", createVNode(_components.p, {
      children: "This is not as critical for some concerns as it is for others, but it’s critical if you’re assigning colors automatically while sticking to the WCAG color contrast guidelines."
    }), "\n", createVNode($$AlertCallout, {
      children: createVNode(_components.p, {
        children: ["Fun fact: the WCAG 2.0 color contrast guidelines have some ", createVNode(_components.a, {
          href: "https://git.apcacontrast.com/documentation/WhyAPCA",
          children: "significant\ndeficiencies"
        }), ", in part because they also lean\non a flawed mathematical understanding of contrast."]
      })
    }), "\n", createVNode(_components.p, {
      children: "Other color models try to address this, and we’ll take a look at those in future installments."
    }), "\n", createVNode(_components.h2, {
      id: "similar-variations",
      children: "Similar variations"
    }), "\n", createVNode(_components.p, {
      children: ["There are many similar color models often confused with HSL. CSS also has HWB, which expresses color as a mixture of hue, white, and black. Changing ", createVNode(_components.em, {
        children: "either"
      }), " W or B while keeping the other at 0% is the same as sweeping through the “lightness” values in HSL. HWB is perhaps more intuitive for lightening and darkening colors, but counter-intuitive for neutral tones."]
    }), "\n", createVNode($$Index, {
      children: [createVNode("div", {
        class: "box",
        slot: "fig",
        children: [createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hwb hue",
          style: "margin-bottom: 1rem;"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hwb whiteness",
          style: "margin-bottom: 1rem;"
        }), createVNode($$ColorBar, {
          numSwatches: "16",
          class: "hwb blackness",
          style: "margin-bottom: 1rem;"
        })]
      }), createVNode(_components.p, {
        children: ["Top: Changing the ", createVNode(_components.em, {
          children: "hue"
        }), " value from 0º to 360º. Middle: Changing the ", createVNode(_components.em, {
          children: "whiteness"
        }), " value from 0% to\n100%, blackness 0%. Bottom: changing the ", createVNode(_components.em, {
          children: "blackness"
        }), " value from 0% to 100%, whiteness 100%. Note\nthat all swatches have some hue component except for the pure white and pure black at the ends of\nthe color bars."]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Stefan Judis has an excellent ", createVNode(_components.a, {
        href: "https://www.stefanjudis.com/blog/hwb-a-color-notation-for-humans/",
        children: "article about HWB"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["The other color model confused with HSL is HSB, which stands for Hue, Saturation, and Brightness. In HSB, 100% ", createVNode(_components.em, {
        children: "brightness"
      }), " does not make the color white. Instead, it gives the color its most intense hue. You get actual white by setting brightness to 100% and saturation to 0%. ", createVNode(_components.a, {
        href: "https://commons.wikimedia.org/wiki/File:Hsl-hsv_models_b.svg",
        children: "Wikimedia Commons"
      }), " has a great, but very large, illustration of the differences."]
    }), "\n", createVNode(_components.p, {
      children: "HSV (Hue, Saturation, and Value) is the same color model as HSB — they just disagree on what that third color component is called."
    }), "\n", createVNode(_components.h2, {
      id: "which-is-better-rgb-or-hsl",
      children: "Which is better, RGB or HSL?"
    }), "\n", createVNode(_components.p, {
      children: "If you had to choose just one of these two, HSL is more often than not a better choice. It’s easy to understand. With practice, it’s easier to picture what any given color value will be. And the biggest benefit is that it’s easier to manipulate with code."
    }), "\n", createVNode(_components.p, {
      children: ["That said, ", createVNode(_components.em, {
        children: "you don’t have to choose"
      }), ". CSS supports both, so there’s no reason not to switch modes if you find one works better than the other. Remember that you can create every color with HSL that you can with RGB (even if some color pickers won’t let you), so use the one you like until circumstances require a change."]
    }), "\n", createVNode(_components.p, {
      children: "Coming up: we complicate matters with newer color models and color spaces beyond the now very dated sRGB."
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

const url = "src/content/posts/2023/12/exploring-hsl/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/12/exploring-hsl/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/12/exploring-hsl/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
