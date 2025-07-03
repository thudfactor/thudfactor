import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import { $ as $$BlogPost } from './BlogPost_CTxqPoOR.mjs';
import './Content_CjvEuKZR.mjs';
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
  "layout": "../../layouts/BlogPost.astro",
  "title": "About the Endmark",
  "description": "Details about the graphical element that appears at the bottom of each page.",
  "date": "Thu Jun  6 08:09:07 EDT 2024"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["The graphic element at the bottom of each page is the phrase “No Silver Bullet,” translated into Tengwar using the handy tool at ", createVNode(_components.a, {
        href: "https://www.tecendil.com/",
        children: "Tecendil"
      }), ". The typeface is ", createVNode(_components.a, {
        href: "https://www.fontspace.com/tengwar-annatar-font-f2244",
        children: "Annatar"
      }), " by Johan Winge. Tengwar is a constructed alphabet initially created by JRR Tolkien for ", createVNode(_components.em, {
        children: "Lord of the Rings"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["The phrase is a reference to Frederick Brooks’s paper ", createVNode(_components.a, {
        href: "https://www.cs.dartmouth.edu/~cs50/Reading/NoSilverBullet.pdf",
        children: "No Silver Bullet: Essence and Accidents of Software Engineering"
      }), " (PDF link). If you do software development or manage software developers, I encourage you to give this paper a good, careful read. Although originally published in 1986, it remains relevant — especially today, when large language models popularly called “AI” are being pitched as a way to dramatically improve the efficiency of software development."]
    }), "\n", createVNode(_components.p, {
      children: ["At the risk of oversimplifying things, Brooks’s observation is that the hard part of software engineering is understanding what needs to be written, not the actual writing itself, and that any tool that targets the ", createVNode(_components.em, {
        children: "writing"
      }), " of code will have only marginal returns. The real efficiency gains are in the specification stage. Unfortunately, that’s a much harder problem… and probably a human one."]
    }), "\n", createVNode(_components.p, {
      children: "LLM code-generation is pretty firmly a “make writing code faster” tool, leaving specifications very much up to the person requesting the code. The resulting code, therefore, is only as good as the ability to describe what it is you are looking for."
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

const url = "/endmark";
const file = "/Users/johnwilliams/projects/thudfactor/src/pages/endmark/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/pages/endmark/index.mdx";
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
