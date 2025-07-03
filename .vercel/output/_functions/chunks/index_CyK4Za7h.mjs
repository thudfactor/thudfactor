import { _ as __astro_tag_component__, g as createVNode, F as Fragment } from './astro/server_B4EwhNOI.mjs';
import { $ as $$BlogPost } from './BlogPost_CTxqPoOR.mjs';
import 'clsx';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$BlogPost, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "title": "Blogroll",
  "description": "Some of my favorite reads (and friends)",
  "date": "Mon Jun  3 06:43:26 EDT 2024",
  "layout": "../../layouts/BlogPost.astro",
  "permalink": "blogroll/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "cohort",
    "text": "Cohort"
  }, {
    "depth": 2,
    "slug": "me-elsewhere",
    "text": "Me, Elsewhere"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    dd: "dd",
    dl: "dl",
    dt: "dt",
    em: "em",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "cohort",
      children: "Cohort"
    }), "\n", createVNode(_components.p, {
      children: "Friends in blog places."
    }), "\n", createVNode(_components.dl, {
      children: ["\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://infyo.me/",
          children: "Infyo"
        })
      }), "\n", createVNode(_components.dd, {
        children: ["…isn’t a blog ", createVNode(_components.em, {
          children: "per se"
        }), ", but if you are interested in modern YoYo (and who isn’t), there’s a lot of good beginner information here.\n"]
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://sarahwilkesdev.com/",
          children: "Sarah Wilkes"
        })
      }), "\n", createVNode(_components.dd, {
        children: ["…who made the Infyo site above, started a blog a bit ago with ", createVNode(_components.a, {
          href: "https://sarahwilkesdev.com/blog/beer-cheese-soup/",
          children: "a recipe for beer-cheese soup"
        }), "\n"]
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://filmoptimist.blog/",
          children: "Film Optimist"
        })
      }), "\n", createVNode(_components.dd, {
        children: ["C. Glen Williams’s media commentary is fun; this blog is the companion to their YouTube channel, which tends to do ", createVNode(_components.em, {
          children: "extremely"
        }), " deep dives on, for example, ", createVNode(_components.a, {
          href: "https://www.youtube.com/playlist?list=PL0KNo7dSX9klzj-indE4KC8bUm__GQYMl",
          children: "Captain America"
        }), ".\n"]
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://pelanne.com/",
          children: "Pelanne.com"
        })
      }), "\n", createVNode(_components.dd, {
        children: "Interesting technical links with the absolute minimum of commentary. (None.)\n"
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://thomasyancey.com/",
          children: "Tom Yancey"
        })
      }), "\n", createVNode(_components.dd, {
        children: ["…his projects are always entertaining. For example, see his ", createVNode(_components.a, {
          href: "https://thomasyancey.com/#/projects/alteredchromatic",
          children: "Altered Chromatic"
        }), " keyboard.\n"]
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://jordanseiler.xyz/",
          children: "Jordan Seiler"
        })
      }), "\n", createVNode(_components.dd, {
        children: ["…wrote something quite useful about ", createVNode(_components.a, {
          href: "https://jordanseiler.xyz/posts/2023-04-30-flat-map/",
          children: "Array.flatMap()"
        }), ".\n"]
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://tobyhagan.com/",
          children: "Toby Hagan"
        })
      }), "\n", createVNode(_components.dd, {
        children: ["…tackles some more difficult topics, like ", createVNode(_components.a, {
          href: "https://tobyhagan.com/blog/create-a-scalable-naming-system",
          children: "how to build a scalable naming system"
        }), " in large infrastructure projects.\n"]
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://www.solonor.com",
          children: "Solonor’s Inkwell"
        })
      }), "\n", createVNode(_components.dd, {
        children: "…has been blogging for a very long time, although posts have dropped off in recent years (as they have for everyone).\n"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "me-elsewhere",
      children: "Me, Elsewhere"
    }), "\n", createVNode(_components.dl, {
      children: ["\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://www.filmhydra.com/",
          children: "Film Hydra"
        })
      }), "\n", createVNode(_components.dd, {
        children: "my movie blog.\n"
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://www.elfinjohn.com/",
          children: "Elfin John"
        })
      }), "\n", createVNode(_components.dd, {
        children: "my older portfolio blog.\n"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/blogroll";
const file = "/Users/johnwilliams/projects/thudfactor/src/pages/blogroll/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/pages/blogroll/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
