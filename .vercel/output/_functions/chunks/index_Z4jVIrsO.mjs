import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import { $ as $$Index } from './index_B811OrL0.mjs';
import 'clsx';

const FontSizeSettings = new Proxy({"src":"/_astro/font-size-selector.D3LYi6aS.png","width":1432,"height":624,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/03/pixels/font-size-selector.png";
							}
							
							return target[name];
						}
					});

const TextZoomBroken = new Proxy({"src":"/_astro/text-zoom-broken.C8GRMFtZ.png","width":1500,"height":286,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/03/pixels/text-zoom-broken.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Maybe sometimes you should use pixels",
  "date": "2024-03-14T23:02:38.000Z",
  "updatedDate": "2024-03-16T11:43:13.000Z",
  "categories": ["Design", "Typography", "100 Days to Offload"],
  "tags": "post",
  "description": "The conventional wisdom is that you should not use pixel units, but maybe sometimes you should?"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "a-tale-of-two-zooms",
    "text": "A Tale of Two Zooms"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["When I posted the early stages of my redesign at the end of February, someone on Mastodon said I should change the CSS of my main container to use ", createVNode(_components.code, {
        children: "em"
      }), " units instead of ", createVNode(_components.code, {
        children: "px"
      }), " because it’s “more accessible.”"]
    }), "\n", createVNode(_components.p, {
      children: "About that."
    }), "\n", createVNode(_components.p, {
      children: "I’ve been doing this web development thing for a bit now, and sure, I’ve heard that line for years. Believed and used it, too."
    }), "\n", createVNode(_components.p, {
      children: ["The conventional wisdom is that you should convert all of your absolute units (like pixels) to relative units like ", createVNode(_components.code, {
        children: "em"
      }), " or ", createVNode(_components.code, {
        children: "rem"
      }), " so people who like to use a larger font size won’t have their choices overridden. And we’ve been doing that for years. I’ve even made a few SASS mixins in my time to automatically convert pixel values into ", createVNode(_components.code, {
        children: "rem"
      }), " units, and have for many years diligently converted every ", createVNode(_components.code, {
        children: "px"
      }), " in my codebase to ", createVNode(_components.code, {
        children: "rem"
      }), ". Even the border widths."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "1px"
      }), " is ", createVNode(_components.code, {
        children: "0.0625rem"
      }), ", by the way."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "But"
      }), " I hate putting tools out of use without a super good reason, and so I’ve been wondering — is there a place for pixels?"]
    }), "\n", createVNode(_components.p, {
      children: "I think there is. In fact, I think pixels work best under most circumstances."
    }), "\n", createVNode(_components.p, {
      children: "I’ll spoil the ending for you: relative sizes are great for fonts and line-spacing, but for other elements like padding, margin, borders, and layout sizes, pixels may actually be preferable."
    }), "\n", createVNode(_components.p, {
      children: ["That’s because browsers offer ", createVNode(_components.em, {
        children: "two"
      }), " different ways of scaling fonts."]
    }), "\n", createVNode(_components.h2, {
      id: "a-tale-of-two-zooms",
      children: "A Tale of Two Zooms"
    }), "\n", createVNode(_components.p, {
      children: ["Some time ago — quite some time ago, in fact — browsers standardized on “page zoom.” If you use zoom right now in Safari, Firefox, or Chromium browsers (Arc, Edge, Chrome, Opera) you will notice everything on this page gets bigger, despite the fact that I’ve used a mixture of ", createVNode(_components.code, {
        children: "px"
      }), " and ", createVNode(_components.code, {
        children: "rem"
      }), ". Zoom in far enough on the desktop and you will start to see the mobile layout of this site."]
    }), "\n", createVNode(_components.p, {
      children: ["All of the browsers determined that zooming in and out was a critical enough accessibility issue that it couldn’t be left up to the entire Web to retrofit font sizes to ", createVNode(_components.code, {
        children: "px"
      }), " or ", createVNode(_components.code, {
        children: "rem"
      }), ". So: setting margins, padding, and font sizes in pixels doesn’t disable zoom anymore, and it hasn’t in a long time."]
    }), "\n", createVNode(_components.p, {
      children: ["On the other hand, browsers let you set the default base font size. “Normal” here is ", createVNode(_components.code, {
        children: "16px"
      }), " (with some exceptions)."]
    }), "\n", createVNode($$Index, {
      image: FontSizeSettings,
      alt: "A screenshot from Chrome settings showing an active 'font size' menu, with 'very large' selected.",
      children: createVNode(_components.p, {
        children: "Here in the browser appearance settings in Chrome you can set the base font size independently of\npage zoom."
      })
    }), "\n", createVNode(_components.p, {
      children: ["Chrome has their font size settings buried pretty deep in the settings. Safari binds text-only size increases to ", createVNode(_components.code, {
        children: "⌘⌥ +"
      }), " / ", createVNode(_components.code, {
        children: "⌘⌥ -"
      }), ". Firefox has a “zoom text only” toggle in the zoom menu. If you’re so inclined you can try those out now here on this page. What you should see is that changing the font size alone makes the text on this page bigger or smaller, but the layout doesn’t change otherwise."]
    }), "\n", createVNode("p", {
      style: "font-size: 16px",
      children: createVNode(_components.p, {
        children: "This text, on the other hand, ignores the font size changes because I’ve set the font size in\npixels. So it remains true that setting the font size in pixels overrides the user’s expressed\npreferences. The standard page zoom, on the other hand, won’t make this paragraph look any\ndifferent from the others."
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Update March 16, 2024:"
      }), " ", createVNode(_components.a, {
        href: "https://mamot.fr/@nhoizey/112104806072228680",
        children: "Nicolas Hoizey pointed out"
      }), " that Firefox zooms text even if the size is set in pixels. This is also the case in Safari. So to see the behavior I described above, you have to be using Chrome (or its derivatives). Interestingly, the only thing this effectively changes is that if Chrome adopts this strategy, too, even sizing fonts in ", createVNode(_components.code, {
        children: "rem"
      }), " or ", createVNode(_components.code, {
        children: "em"
      }), " will become an academic / purity exercise."]
    }), "\n", createVNode($$Index, {
      image: TextZoomBroken,
      alt: "A screenshot of this page, with the browser text size set to “very large.”",
      children: createVNode(_components.p, {
        children: ["Here’s what it looks like on my computer if I set the font size setting to “very large” in Chrome.\nThe font sizes set in ", createVNode(_components.code, {
          children: "rem"
        }), " or ", createVNode(_components.code, {
          children: "em"
        }), " scale, but the paragraph set in ", createVNode(_components.code, {
          children: "px"
        }), " stays the same\nregardless."]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This behavior is possible ", createVNode(_components.em, {
        children: "here"
      }), " because I’ve set margins, padding, and responsive container sizes controlling layout to rely on pixel values, while keeping font size and line heights relative."]
    }), "\n", createVNode(_components.p, {
      children: ["If, however, you follow the conventional wisdom (“", createVNode(_components.code, {
        children: "px"
      }), " units are evil”), the end result is that changing the base font size ", createVNode(_components.em, {
        children: "alone"
      }), " works exactly the same way as page zoom ", createVNode(_components.em, {
        children: "already"
      }), " works."]
    }), "\n", createVNode(_components.p, {
      children: ["You are re-implementing page zoom, which is pointless. But you are also ", createVNode(_components.em, {
        children: "removing"
      }), " the ability for users to change font size independently."]
    }), "\n", createVNode(_components.p, {
      children: "Where does this leave us? Well."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["Sizing everything using ", createVNode(_components.code, {
            children: "px"
          })]
        }), " satisfies ", createVNode(_components.a, {
          href: "https://wcag.com/designers/1-4-4-resize-text/",
          children: "WCAG 2.1 1.4.4"
        }), " through ", createVNode(_components.a, {
          href: "https://www.w3.org/WAI/WCAG21/Techniques/general/G142",
          children: "technique G142"
        }), " as long as people use one of the very common browsers with “page zoom.” People who want to resize text independently are just out of luck."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["Sizing everything using ", createVNode(_components.code, {
            children: "rem"
          })]
        }), " satisfies the same requirement through ", createVNode(_components.a, {
          href: "https://www.w3.org/WAI/WCAG21/Techniques/css/C28",
          children: "technique C28"
        }), " and ", createVNode(_components.a, {
          href: "https://www.w3.org/WAI/WCAG21/Techniques/general/G146",
          children: "technique G146"
        }), ", but since that’s ", createVNode(_components.em, {
          children: "already"
        }), " met by browser page zoom, resizing text independently is impossible."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["Mixing ", createVNode(_components.code, {
            children: "px"
          }), " and ", createVNode(_components.code, {
            children: "rems"
          }), " deliberately"]
        }), " satisfies accessibility requirements through ", createVNode(_components.a, {
          href: "https://www.w3.org/WAI/WCAG21/Techniques/general/G179",
          children: "technique G179"
        }), ", ", createVNode(_components.em, {
          children: "as long as access to all of the content and functionality remains available"
        }), ". This approach does not interfere with the native browser support offered through page zoom. So it’s the only choice that supports both page and text-only zoom on Chrome."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The third option is the most difficult. If you go this route, you have decide what should scale with font size and what shouldn’t. That’s many new judgement calls and a lot more testing. Maybe you don’t want or can’t support that. But it does preserve your visitors’ ability to scale text independently of your layout."
    }), "\n", createVNode(_components.p, {
      children: "It also demonstrates why following conventional wisdom banning specific practices without regard for context has unintended consequences and leads to pointless complexity."
    }), "\n", createVNode(_components.p, {
      children: ["That, at least, is my thinking for this project. Am I wrong? Perhaps I am wrong. Maybe conventional wisdom is conventional for good reason, and my attempt to support text-only preferences is the real waste of time and resources. I’d love to hear your opinions on the matter, so ", createVNode(_components.a, {
        href: "https://hachyderm.io/@thudfactor",
        children: "let me know on Mastodon"
      }), "."]
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

const url = "src/content/posts/2024/03/pixels/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/03/pixels/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/03/pixels/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
