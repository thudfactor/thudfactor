import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import { $ as $$AlertCallout } from './AlertCallout_BPXWUukm.mjs';
import { $ as $$Index } from './index_B2d5c0sX.mjs';
import 'clsx';

const DisplaySettings = new Proxy({"src":"/_astro/display-settings.D7tFDrAG.png","width":938,"height":970,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/12/prefers-reduced-motion/display-settings.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Prefers reduced motion",
  "date": "2023-12-14T00:00:00.000Z",
  "description": "Supporting your site visitors who have motion sensitivities.",
  "categories": ["CSS", "Accessibility"],
  "tags": "post",
  "js": null,
  "css": null,
  "cover": {
    "src": "./medusa.png",
    "alt": "A closeup of Medusa’s sneering face from the 1981 movie “Clash of the Titans”",
    "description": "Some of us will go to great lengths to make things just stand still.",
    "attribution": {
      "name": "Ray Harryhausen / United Artists"
    }
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Some people say Medusa turned people to stone because she was just that ugly. Others portray her as an evil, magical being. Still more claim Medusa was just an unlucky woman cursed by the victim-blaming God Minerva. I have my own theory, which is that Medusa just wanted people to settle down."
    }), "\n", createVNode($$Index, {
      image: DisplaySettings,
      alt: "Display settings on MacOS, with Reduce Motion, Dim Flashing Lights turned on, and Auto-play Animated Images turned off.",
      position: "right",
      children: createVNode(_components.p, {
        children: "The MacOS display settings, which shows many different accessibility options."
      })
    }), "\n", createVNode(_components.p, {
      children: ["I can sympathize. I am prone to ", createVNode(_components.a, {
        href: "https://health.clevelandclinic.org/sensory-overload",
        children: "sensory overload"
      }), ", which is triggered by both motion and sound. Unlike folks with vestibular disorders, I don’t get dizzy, nauseous, or a headache. I instead get tense, anxious, irritable, and withdrawn. That’s why I’ve turned on “reduce motion” for every device that supports it. (It’s also the primary reason I run my browser with ad blockers on — one flashing or auto-playing advertisement on the screen can make the entire page unusable for me.)"]
    }), "\n", createVNode(_components.p, {
      children: ["Motion sensitivity is a big problem for a lot of people, but web sites often don’t take that into account. I hope it’s not because they think they have to have a boring site, because since 2020 you can ", createVNode(_components.em, {
        children: "totally"
      }), " keep your wacky spinning logo and turn it off for the people who can’t even. All it takes is a media query."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "css",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@media"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (prefers-reduced-motion: reduce) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "\t/* alternative, calm animations here */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/* or */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@media"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (prefers-reduced-motion) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "\t/* alternative, calm animations here */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["If you want to treat animation as a progressive enhancement, you can ", createVNode(_components.em, {
        children: "add"
      }), " animations with slightly different syntax:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "css",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@media"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " screen"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (prefers-reduced-motion: no-preference) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "\t/* your re-implementation of <blink> */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode($$AlertCallout, {
      children: "“No preference” in this context evaluates to “false.”"
    }), "\n", createVNode(_components.p, {
      children: "This media query ties into the accessibility settings on the user’s operating system, so you can test the effect by toggling that feature on and off in your system preferences. Alternatively, there’s an emulation switch in Chrome’s developer tools, but if you turn on reduced motion in MacOS display preferences this will override the emulation settings."
    }), "\n", createVNode(_components.p, {
      children: ["Access to this OS-level setting is not just limited to CSS, however. You can use ", createVNode(_components.code, {
        children: "window.matchMedia()"
      }), " to check it your Javascript."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " settleDown"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " window."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "matchMedia"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`(prefers-reduced-motion: reduce)`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").matches "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Some ideas for this are:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "turning off or replacing blinking items, spinning logos, or other interface nonsense"
      }), "\n", createVNode(_components.li, {
        children: "disabling auto-advancing carousels"
      }), "\n", createVNode(_components.li, {
        children: ["turning auto-play ", createVNode(_components.em, {
          children: "off"
        }), " on videos if reduced motion preferences are on."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["WCAG says it must be possible to “", createVNode(_components.a, {
        href: "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html",
        children: "pause, stop, or hide"
      }), "” any animation on a page that’s not crucial to the page’s operation. This is such an important consideration it’s a requirement of passing WCAG level A, so it’s baseline accessibility."]
    }), "\n", createVNode(_components.p, {
      children: "Turning these animations off preemptively is somewhat more aggressive but certainly friendlier, and it’s been my default coding strategy for some time now when doing design implementation for clients. In the cases of incidental, decorative animations, it’s a lot safer to remove them than it is to offer toggle switches."
    }), "\n", createVNode(_components.p, {
      children: "For the larger features, well, lots of folks are willing die on the hill of auto-advancing carousels and auto-playing video, but in my experience most will allow a carve-out for accessibility purposes. Assume your clients want an accessible web site and make ’em tell you otherwise, that’s my policy."
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

const url = "src/content/posts/2023/12/prefers-reduced-motion/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/12/prefers-reduced-motion/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/12/prefers-reduced-motion/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
