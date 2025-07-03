import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import 'clsx';

const frontmatter = {
  "title": "Using modern font stacks",
  "date": "2024-03-25T12:02:38.000Z",
  "categories": ["Design", "Typography", "100 Days to Offload"],
  "tags": "post",
  "description": "Goodbye Google Fonts, hello (again) system fonts"
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
      children: "I really enjoy choosing fonts for web sites, even though I am not good at it.  There’s another problem with fonts, though — they tend to be pretty heavy and they can take a while to load. Both of those always left me feeling a bit guilty about indulging my font fetish, but what alternatives were there? The old ‘Times New Roman’, ‘serif’ type stacks of yesteryear?"
    }), "\n", createVNode(_components.p, {
      children: ["Enter ", createVNode(_components.a, {
        href: "https://modernfontstacks.com/",
        children: "Modern Font Stacks"
      }), ", a web site created by ", createVNode(_components.a, {
        href: "https://danklammer.com/",
        children: "Dan Klammer"
      }), ". Dan’s taken some time to figure out what fonts are commonly available, grouped them into common typeface categories, and created new, modern font stacks."]
    }), "\n", createVNode(_components.p, {
      children: ["Somewhere on this page is a font selector tool you can use to change the font stack I am using here. I particularly like the “Geometric Humanist” set. I also like “Rounded Sans” but there seems to be an error with the ellipsis on at least one of the fonts. And you know how ", createVNode(_components.a, {
        href: "https://thudfactor.com/posts/2024/02/punctuation/",
        children: "I love my ellipsis"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Not all of the categories will look different on every device. Android in particular ships with a stingy quantity of alternative fonts, so chances are you are always going to end up with either Droid Sans or Droid Serif. But they all resolve to ", createVNode(_components.em, {
        children: "something"
      }), " and don’t require any additional downloads."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "If"
      }), " you still want to choose your own fonts, though, you can still use these. Match your custom font to one of the typeface genres, then use that genre as a fallback. It’s a great way to make sure Raleway (for example) doesn’t just resolve to Arial when people have custom fonts turned off."]
    }), "\n", createVNode(_components.p, {
      children: "But maybe your use case doesn’t require custom fonts anyway? If you’re doing a blog, particularly a technical blog, custom fonts arguably don’t add much to the experience. Most of these fonts will serve just fine."
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

const url = "src/content/posts/2024/03/font-stack/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/03/font-stack/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/03/font-stack/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
