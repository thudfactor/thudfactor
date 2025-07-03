import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
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
  "title": "Useful Webdev Links",
  "description": "Some of my favorite tools for web development, including reference material on new web standards.",
  "layout": "../../layouts/BlogPost.astro"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "generators-and-tools",
    "text": "Generators and Tools"
  }, {
    "depth": 2,
    "slug": "references",
    "text": "References"
  }, {
    "depth": 2,
    "slug": "videos",
    "text": "Videos"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    dd: "dd",
    dl: "dl",
    dt: "dt",
    h2: "h2",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "generators-and-tools",
      children: "Generators and Tools"
    }), "\n", createVNode(_components.dl, {
      children: ["\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://jakearchibald.github.io/svgomg/",
          children: "SVGOMG"
        })
      }), "\n", createVNode(_components.dd, {
        children: "SVG tool for cleaning up, compressing, and simplifying SVGs. I often use this after exporting an SVG from a tool like Figma.\n"
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://www.joshwcomeau.com/shadow-palette/",
          children: "Josh Comeau’s Shadow Palette Generator"
        })
      }), "\n", createVNode(_components.dd, {
        children: "Generate nice looking, naturalistic drop shadows in CSS.\n"
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://wakamaifondue.com/",
          children: "Wakamai Fondue (font analysis)"
        })
      }), "\n", createVNode(_components.dd, {
        children: "Web app that can analyze a font file and tell you lots of stuff about it, including the color palettes (if any) and what axes are available.\n"
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://flexboxlabs.netlify.app/",
          children: "Flexbox Labs"
        })
      }), "\n", createVNode(_components.dd, {
        children: "A great way to try out different flexbox properties and see what they do; familiar iconography might help make the dubiously-inuitive property names stick in your head a little better.\n"
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://anchoreum.com/",
          children: "Anchoreum"
        })
      }), "\n", createVNode(_components.dd, {
        children: "Similar to above; an interactive playground for anchor-based positioning. (Browser support is chrome-only at the moment, but on the roadmap for Firefox and Safari.)\n"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.dl, {
      children: ["\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://designbeyondbarriers.com/",
          children: "Design Beyond Barriers"
        })
      }), "\n", createVNode(_components.dd, {
        children: "Lots of good tips here on how to design for accessibility.\n"
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://every-layout.dev",
          children: "Every Layout"
        })
      }), "\n", createVNode(_components.dd, {
        children: "Heydon Pickering & Andy Bell’s composable styles for common layout problems, with a lot of explanation for the thought behind the styles. The layouts themselves are a paid product, but the introductory material is both valuable and free.\n"
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://ishadeed.com/article/css-container-query-guide/",
          children: "Ahmad Shadeed’s Interactive Guide to CSS Container Queries"
        })
      }), "\n", createVNode(_components.dd, {
        children: "Not just the what, but the why.\n"
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://cube.fyi/",
          children: "CUBE CSS"
        })
      }), "\n", createVNode(_components.dd, {
        children: "Andy Bell’s CSS organization strategy based partly on BEM but less opinionated on naming conventions.\n"
      }), "\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://patrickbrosset.com/lab/navigating-the-web-platform/",
          children: "Navigating the Web Platform"
        })
      }), "\n", createVNode(_components.dd, {
        children: "A collection of links on how to keep up with changes to the web platform & how to participate in its development.\n"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "videos",
      children: "Videos"
    }), "\n", createVNode(_components.dl, {
      children: ["\n", createVNode(_components.dt, {
        children: createVNode(_components.a, {
          href: "https://www.youtube.com/watch?v=DNXEORSk4GU",
          children: "CSS Popover + Anchor Positioning is Magical"
        })
      }), "\n", createVNode(_components.dd, {
        children: "Kevin Powell explains both the basics of popovers and anchor positioning in about 20 minutes.\n"
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

const url = "/links";
const file = "/Users/johnwilliams/projects/thudfactor/src/pages/links/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/pages/links/index.mdx";
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
